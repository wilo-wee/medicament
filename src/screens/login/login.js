
import './login.css'

const Login = ()=> {

    return (
        <div className={'container'}>
            <div className={'card'}>
                <div className={'tittel'}>
                    <span className={'tittel-text'}>login</span>
                </div>

                <div className={'inputs'}>
                    <input placeholder={'login'}/>
                    <input type={'password'} placeholder={'password'}/>
                </div>
            
                <div className={'action'}>
                    <div className={'auth'}>
                        <span>S'authentifier</span>
                    </div>
                    <div className={'auth'}>
                        <span>S'incrire</span>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Login;