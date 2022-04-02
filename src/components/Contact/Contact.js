import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="container contact-form">
                <div className="contact-image">
                    <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
                </div>
                <form>
                    <h3>Drop Us a Message</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" name="txtName" className="form-control" placeholder="Your Name *" />
                            </div>
                            <div className="form-group my-2">
                                <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" />
                            </div>
                            <div className="form-group mb-2">
                                <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *" />
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <textarea name="txtMsg" className="form-control" placeholder="Your Message *" style={{ width: "100%", height: "8.2rem" }}></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="submit" name="btnSubmit" className="btnContact mt-2" value="Send Message" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;