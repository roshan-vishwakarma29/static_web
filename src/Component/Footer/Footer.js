import React from 'react'
import './Footer.css'
import aligan from '../../Assets/image/aligan.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <h3 className='head'>About us</h3>
                <ul className='unorderlist'>
                    <li>Componey</li>
                    <li>GDPR</li>
                    <li>Blog</li>
                    <li>Jobss</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                </ul>
            </div>
            <div>
                <h3 className='head'>Industries</h3>
                <ul className='unorderlist'>
                    <li>Aviation</li>
                    <li>Finance & Enterprise</li>
                    <li>Blog</li>
                    <li>Government</li>
                    <li>Healthcare</li>
                    <li>Higher Education</li>
                </ul>
            </div>

            <div>
                <h3 className='head'>Solutions</h3>
                <ul className='unorderlist'>
                    <li>Aviation</li>
                    <li>Emergency Management</li>
                    <li>Business Continuity Management Software</li>
                    <li>Mass Notification / Emergency Notification System</li>
                    <li>Continuity of Operations Planning (COOP)</li>
                    <li>GIS Mapping</li>
                    <li>Communication & Collaboration</li>
                </ul>
            </div>
            <div>
                <div>
                    <div>
                        <h3 className='head'>Contact Us</h3>
                        <p className='Contact_Uspara'>Contact Us</p>
                        <p className='Contact_Us'>195 Church Street, 14th Floor
                            New Haven, CT 06510 (203) 782-5944
                            info@veoci.com
                        </p>
                    </div>
                    <div>
                        <h3 className='head'>Middle East and Asia</h3>
                        <p className='Contact_Uspara'>iPrime Services is the authorized Veoci partner in the Middle East and Asia</p>
                    </div>
                    <div className='allicons'>
                        <div>
                            <img className="iconimg" src="data:image/png;base64,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" alt="" />
                        </div>
                        <div>
                            <img className="iconimg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB/CAMAAADxY+0hAAAAYFBMVEX///8AAABZWVnf39/Ly8v5+fljY2NUVFTp6ekGBgZwcHDT09Nzc3PDw8OysrKPj481NTWZmZmhoaEkJCRpaWlKSkoTExMYGBjz8/M9PT1DQ0O9vb2EhITZ2dktLS19fX2in7nkAAABiUlEQVRoge3bbW+CMBSG4QItLxZEAUEF5///lyPuwzK2ltO1BxLz3J9JLsVQWipCBOlaHev41PbRq+K7oVZhBIst69sQGTvz6nlz7834XMqpq7q14nMx4w9wXMNZ/SQl8Hx+daLwbP5YkHguf6TpXH5F5Xl8vXrZsfrqQuZZ/InOc/gPB57Dj/f1pQsf3lfdvr4mDnxcfu3EB/ddrn0OX7vxwf1mZ9/x9EddWF7Q7zxfybD82tj7cc/Sw6ty7jA9wvIrN/5SXwN7y2xT3jbwuf4r2+gz8vPiaeYz9qXeXGn2mw14YVlzbHH6bXOPamdf7+wn8OHDhw//XfxcLtLm6Xdx1MujpfT7TAntEZ+l3uumbJlsUbt5TMpU5u9HOXz48OHDhw8fPnz4xEgb/PYGH5/y/4aVJg9eiLFMf9ZZHv/H6a+6xvOZrFpkX/8tj1ab7r2+4foXPnz48OHDhw8fPnz48OHDhw8fPnz48OHDhw+fP/OWXO+z00bOvCV32YIX4mx41zz+19f/BNrwH0jK6LLdAAAAAElFTkSuQmCC" alt="" />
                        </div>
                        <div>
                            <img className="iconimg" src="data:image/png;base64,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" alt="" />
                        </div>
                        <div>
                            <img className="iconimg" src="data:image/png;base64,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" alt="" />
                        </div>
                        <div>
                            <img className="iconimg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAY1BMVEX///8AAADg4OBiYmL19fXw8PCtra36+vrn5+fOzs7q6urV1dWxsbEvLy+amppvb290dHTCwsJqamq5ublGRkYkJCRAQEBTU1M2NjaFhYUSEhLIyMgJCQkcHByMjIyioqJ9fX3fiwkVAAAE2ElEQVRoge1a6darKgy1TtUq1nmodXj/p7xYA4W2Xw1aOeuu5f6FA2yBJCQxhnHgwIEDBw78X3G2nYtnmmbg+22SZGEYug/QRpYkre8H9KF3cezzBhKbDp+5wxD1cWrlpLidFHErSG6lcR9Fg5vQT7KXOU03Jao0GJCra36ZabgLKSd3/5j5vrQz9Qdax9qbdkLlvW1up4P3dLr7Mm9w//LurSsoCKnLPM+rqrKs9BqPDRXavhnja2pZ9CZ9VNaETG92ty+jnVqR9yI/K6gyjP3ghlnrBwFVT9s+I/XzfLZtqvBB4LdZ6A6TQpaFPHogvJ4/b/fJBUehAi/phWk5/H7Eb4a/J2XI+MRHduvCTJPl/N1vO+zr62KzCV+32FkMGiCK4Uvq+TJHmNSNAFvRzWKUwHf4C71+AFMSJVj6an9emesM0vbJjv4csLrdJMUBTH9vyZohmC9X40rztR5oM52bkR5iYZqFNpmeAHLdUdmCVd9fiR9gdGfDg5YeXi5dJhNqoouYMHPtw/mgi9hiIgUqfcV2TIZskziAPiVGODcaXLf28fK44fhsmLV2VdQY9oW+vtrORcxA8wYC54oRn25rfRU+0Z5NHQHvJCBPVhHD1vbGODcyTCfzJMEKlru8IZv7jkbMpEydmPowb4HBIkCLYibeKFP9Rky1QVXKfKa+IC+oVftAPJ9wCgBLWRnl3PgSvb4RW5kUaN2VBBzGKI16BbFhDNKky3a578sYNTPaKCl5Eht2I1FXaAEHlSTMD0AFTAIxvYglaqyAQ3xYGLBdKOsrEVM5qUTmW48aw5nf7gyIm1AnzgsxVcpSpC4GhG7Z8JkGxNAodXwj5qYXUC/bIfB97swVwfB+IhZj3An94iCMcDPxi4Avzvl3xPT+9Um86EP9kpg+eUqZVmIn4nmGTiOxPQg5wVgfcSYp86LR/xVxm4u0CE/mN8SmZDVPKcJg/4LYlBOvFupsZYTrTaY3SrQVLtDlJnPtIeH00h+DEuvs8kNi3bFoD1JmlLhon48fiyscgdTIapG2ixRiKe4IrHB9almUG6V0L3d9Vjh7Eq6KPj139la4twLwTt7LGOUmhz5fkSriDj2kuVBDSNEiXoMk+ExAwUlFueSOEEGQcF1sPucU6CGmEqYa/M9CF61NhPAwVSUwN+zZON/UNEgCD8xVUhHU0rqkIA1KBf4AT0VAAx9sbsw9Dmyiaumm7eDpJtUE21bwBNs/SynqTqLWzFIyM6iLGOhM5hFo+hci5uU79glaADs7xRuVkgXZiugpy5FWfbKe9qrVKV1si6dTmJ11uPNpI8BAFw9Rhk1OdRBXorli+RMNcs3+Y86re4G1tnZXZZbhJ+CHsxTduDcxC7bYUcidx32LE84sRXPnrvgzX4TJza1EwqOtZy7MFnIYeZRgCr/U4LVCbFkLk3v11O+kgpqbR1VcYJoXB1N2MxXcOBfzWXEzTiVwL5U/kvb4p6/gdUakhkojy0rjUawwysuynkuMvtcYvYYOgXJh3jq8llXpKiTLP8WWcvJ5DxR/OdHtdbnzBlr3m5nwhyZfHkMZ5dfySGHDzSAZhijqxzilClETJdG7FXVepXETDYOb+YG5tTJtqoK9eLwOdiqDDbOManr7qH81va0VsAcOHDhw4MA/xn8XQDup6tXLDQAAAABJRU5ErkJggg==" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer_end'>
                <div>
                    <img src={aligan} style={{ width: "8    0px" }} alt="" />

                </div>
                <div>
                    <p className='Certified_Risk'>SO/IEC 27001
                        Certified Risk
                        Management Solution</p>
                </div>
            </div>
            
        </div>
        
    )
}

export default Footer