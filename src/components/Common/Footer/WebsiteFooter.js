import React from 'react';

const WebsiteFooter = () => {
    return (
        <div>
            <footer>
                <div className="ftr">
                    <div className="lft_ftr">
                        <div className="lg_nm">
                            <h6>FLICAF</h6>
                        </div>
                        <ul className="ftr_lst">
                            <li>
                                <a href="#">TERMS OF USE</a>
                            </li>
                            <li>
                                <a href="#">PRIVACY POLICY</a>
                            </li>
                            <li className="rsvd">
                                flicaf.com. All rights reserved
                            </li>
                        </ul>
                    </div>

                    <ul className="ftr_lst">
                        <li>
                            <a href="#">FACEBOOK</a>
                        </li>
                        <li>
                            <a href="#">INSTAGRAM</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default WebsiteFooter;
