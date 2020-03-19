import React,{useState} from 'react'
import Head from 'next/head'
import {Row, Col , Icon ,List, Breadcrumb  } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Footer from '../components/Footer'
import axios from 'axios'
import '../static/style/pages/detailed.css'
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import servicePath from '../config/apiUrl'
const Detailed = (list) => {
    const renderer = new marked.Renderer();

    marked.setOptions({
        renderer: renderer,
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        }
    });

    let html = marked(list.article_content)
    const [detailArray, setdetailArray] = useState(list)
return (
    <>
        <Head>
            <title>博客详细页</title>
        </Head>
        <Header />
        <Row className="comm-main" type="flex" justify="center">
            <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
                <div>
                    <div className="bread-div">
                        <Breadcrumb>
                            <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                            <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                            <Breadcrumb.Item>xxxx</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>

                    <div
                    dangerouslySetInnerHTML={{__html:html}}>
                    </div>

                </div>
            </Col>

            <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                <Author />

            </Col>
        </Row>
        <Footer/>

    </>
)
}
Detailed.getInitialProps = async(context)=>{
    console.log(context.query.id)
    let id =context.query.id
    const promise = new Promise((resolve)=>{
        axios(servicePath.getArticleById+id).then(
            (res)=>{
                console.log(res)
                resolve(res.data.data[0])
            }
        )
    })
    return await promise
}

export default Detailed
