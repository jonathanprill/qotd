const { User, Group, Question, Answer } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('groups')
                    .populate('friends')
                    .populate('answers');

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
        // Get all groups
        groups: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Group.find(params).sort({ createdAt: -1 })
            .populate('members');
        },
        // Get single group
        group: async (parent, { groupName }) => {
            return Group.findOne({ groupName })
                .populate('members');
        },
        // get all users
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('friends')
                .populate('answers')
                .populate('groups');
        },
        // get a user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('friends')
                .populate('answers')
                .populate('groups');
        },
        answers: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Answer.find(params).sort({ createdAt: -1 });
        }

    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        addGroup: async (parent, { groupName }, context) => {
            if (context.user) {
                const group = await Group.create({ groupName });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { groups: group._id } },
                    { new: true }
                )
                await Group.findOneAndUpdate(
                    { groupName: groupName },
                    { $push: { members: context.user._id } },
                    { new: true }
                );
                return group;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        addMember: async (parent, { groupId }, context) => {
            if (context.user) {
                const updatedGroup = await Group.findOneAndUpdate(
                    { _id: groupId },
                    { $addToSet: { members: context.user._id } },
                    { new: true }
                ).populate('members');
                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { groups: groupId } },
                    { new: true }
                ).populate('groups');

                return updatedGroup;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        addAnswer: async (parent, args, context) => {
            if (context.user) {
                const answer = await Answer.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { answers: answer._id } },
                    { new: true }
                );

                return answer;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        addFriend: async (parent, { friendId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { friends: friendId } },
                    { new: true }
                ).populate('friends');

                return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        deleteAnswer: async (parent, { _id }, context) => {
            if (!context.user) return notLoggedIn();

            try {
                const answer = await Answer.findOne({ _id });
                const user = await User.updateOne(
                    { username: answer.username },
                    { $pull: { answers: { _id } } },
                    { new: true }
                );
                await answer.remove();
                return user;

            } catch (error) {
                console.log(error);
                return Promise.reject(error);
            }
        },
        deleteGroup: async (parent, { _id }, context) => {
            if (!context.user) return notLoggedIn();

            try {
                const group = await Group.findOne({ _id });
                const user = await User.updateOne(
                    { username: group.username },
                    { $pull: { groups: { _id } } },
                    { new: true }
                );
                await group.remove();
                return user;
                
            } catch (error) {
                console.log(error);
                return Promise.reject(error);
            }
        },
        removeMember: async (parent, { userId, groupId }, context) => {
            if (!context.user) return notLoggedIn();

            try {
                const group = await Group.findOneAndUpdate(
                    { _id: groupId },
                    { $pull: { members: userId } },
                    { new: true }
                )
                await User.findOneAndUpdate(
                    { _id: userId },
                    { $pull: { groups: groupId } },
                    { new: true }
                );
                
                return group;

                
                
            } catch (error) {
                console.log(error);
                return Promise.reject(error);
            }
        }
    }
};

module.exports = resolvers;