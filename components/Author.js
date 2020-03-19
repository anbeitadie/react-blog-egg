import {Avatar,Divider} from 'antd'
import '../static/style/components/author.css'
const Author =()=>{

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} icon="user"  /></div>
            <div className="author-introduction">
                菜鸟想翻身，一直在努力
                <Divider>社交账号</Divider>
                <Avatar size={28} icon="github" className="account"  />
                <Avatar size={28} icon="qq"  className="account" />
                <Avatar size={28} icon="wechat"  className="account"  />
            </div>
        </div>
    )

}

export default Author
