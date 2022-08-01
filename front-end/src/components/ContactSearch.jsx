import React from 'react';

function ContactSearch() {
    return (
        <div className="col-md-6">
            <form className="row">
                <div className="col">
                    <div className="mt-2">
                        <input type="text" className="form-control" placeholder="Search Contacts" />
                    </div>
                </div>
                <div className="col">
                    <div className="mt-2">
                        <button className="btn btn-outline-dark" type="submit">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ContactSearch;