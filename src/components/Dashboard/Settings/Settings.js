import React from 'react';

class Settings extends React.Component {
    render() {
        return(
            <div className="settings-page">
                <h1>Settings</h1>
                <h3>Change Password</h3>
                <p>Change your password once every 30 days to keep your account safe and secure.</p>
                <a href="#">Click here to change password</a>

                <h3>Reset Password</h3>
                <p>If your forget your password, please click the below link to reset your password.</p>
                <a href="#">Click here to reset password</a>
                <br /><br /><br />
                <input type="checkbox" name="post-privacy" />  Make my posts Private by default
            </div>
        )
    }
}
export default Settings;