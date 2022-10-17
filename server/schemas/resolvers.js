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
            return Group.find(params).sort({ createdAt: -1 });
        },
        // Get single group
        group: async (parent, { _id }) => {
            return Group.findOne({ _id });
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
        addGroup: async (parent, args , context) => {
            if (context.user) {
                const group = await Group.create({ ...args});
                
                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { groups: group._id} },
                    { new: true }
                );   
                console.log(args)
                const updatedGroup = await Group.findOneAndUpdate(
                    { groupName: args.groupName },
                    { $addToSet: { members: {_id: context.user._id, username: context.user.username, email: context.user.email}}},
                    { new: true }
                );

                return {group, updatedGroup};
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        addAnswer: async (parent, args, context) => {
            if (context.user) {
                const answer = await Answer.create({ ...args, username: context.user.username });
                
                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { answers: answer._id} },
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
        }
    }
};

module.exports = resolvers;