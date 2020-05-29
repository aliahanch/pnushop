import React, {Component} from 'react';
import "./footer.css";

class Footer extends Component {
    render() {
        return (
            <div className="footerP bg-dark text-light">
                <div className="text-ss border p-5">
                    هفت روز هفته ، ۲۴ ساعت شبانه‌روز پاسخگوی شما هستیم
                    <br />
                    شماره تماس :
                    <br />
                    ۶۱۹۳۰۰۰۰ - ۰۲۱
                    <br />
                    آدرس ایمیل :
                    <br />
                    info@ishop.com

                    <div >
                        <i className="fab fa-telegram p-3"></i>
                        <i className="fab fa-instagram p-3"></i>
                        <i className="fab fa-facebook p-3"></i>
                        <i className="fab fa-twitter p-3"></i>
                    </div>
                </div>
                <div className="text-center align-bottom p-2">
                    <p className="text-capitalize">copy right by ali 2020</p>
                </div>
            </div>
        );
    }
}

export default Footer;