export default function Question() {
    return (
        <div class="container text-center" style={{marginTop: '35%'}}>
            <div class="row align-items-center">
                <div class="col-10 offset-1">
                    <h1 style={{ color: 'black', textDecoration: 'none', fontFamily: 'Libre Baskerville', fontSize: '28px' }}>
                        Who is your favorite comedic television character?
                    </h1>
                    <textarea class="form-control" aria-label="With textarea" placeholder="Character limit 250"></textarea>
                    <button type="button" class="btn btn-light col-10" style={{marginTop: '10px'}}>Submit Answer</button>
                </div>
                {/* <div class="">
                </div>     */}
            </div>
        </div>
    )
}