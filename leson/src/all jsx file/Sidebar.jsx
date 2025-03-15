import "./style.css"
import Users from './Users';

const Sidebar = () => {
    return <div className="border w-25 sidebar">
        <input className="form-control my-2" type="text" placeholder="search users" />
        <Users name="Alisher Istamov">
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos saepe ad facilis temporibus porro vel repudiandae sequi. Nobis ratione exercitationem, assumenda deserunt expedita necessitatibus odit est illum cumque cupiditate fugit!
            </p>
        </Users>

        <Users name="Samar Istamov">
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos saepe ad facilis temporibus porro vel repudiandae sequi. Nobis ratione exercitationem, assumenda deserunt expedita necessitatibus odit est illum cumque cupiditate fugit!
            </p>
        </Users>

        <Users name="Qodir Istamov">
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos saepe ad facilis temporibus porro vel repudiandae sequi. Nobis ratione exercitationem, assumenda deserunt expedita necessitatibus odit est illum cumque cupiditate fugit!
            </p>
        </Users>

        <Users name="Alijon Istamov">
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos saepe ad facilis temporibus porro vel repudiandae sequi. Nobis ratione exercitationem, assumenda deserunt expedita necessitatibus odit est illum cumque cupiditate fugit!
            </p>
        </Users>

        <Users name="Firdavs Istamov">
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos saepe ad facilis temporibus porro vel repudiandae sequi. Nobis ratione exercitationem, assumenda deserunt expedita necessitatibus odit est illum cumque cupiditate fugit!
            </p>
        </Users>

        <Users name="Hoshim Istamov">
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos saepe ad facilis temporibus porro vel repudiandae sequi. Nobis ratione exercitationem, assumenda deserunt expedita necessitatibus odit est illum cumque cupiditate fugit!
            </p>
        </Users>

        <Users name="Furqat Istamov">
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos saepe ad facilis temporibus porro vel repudiandae sequi. Nobis ratione exercitationem, assumenda deserunt expedita necessitatibus odit est illum cumque cupiditate fugit!
            </p>
        </Users>
    </div>
}

export default Sidebar