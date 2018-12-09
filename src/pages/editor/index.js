import React from 'react'
import { Button, Card, Modal } from 'antd'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import draftjs from 'draftjs-to-html'
export default class RichText extends React.Component {

    state = {
        showRichText: false,
        editorContent: '',
        editorState: '',
    };

    handleClearContent = () => {
        this.setState({
            editorState: '',
            editorContent: ""
        })
    }

    handleGetText = () => {
        this.setState({
            showRichText: true
        })
    }

    onEditorChange = (editorContent) => {
        this.setState({
            editorContent
        });
    };

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState
        });
    };

    render() {
        const { editorContent, editorState } = this.state;
        return (
            <div>
                <Card style={{marginTop:10}}>
                    <Button type="primary" style={{margin:'0 10px'}} onClick={this.handleClearContent}>清空</Button>
                    <Button type="primary"  onClick={this.handleGetText}>获取</Button>
                </Card>
                <Card title="富文本编辑器">
                    <Editor
                        editorState={editorState}
                        onContentStateChange={this.onEditorChange}
                        onEditorStateChange={this.onEditorStateChange}
                    />
                </Card>
                <Modal
                    title="富文本"
                    visible={this.state.showRichText}
                    onCancel={()=>{
                        this.setState({
                            showRichText:false
                        })
                    }}
                    footer={null}
                >
                    <p>原始值：</p>
                    <p>{JSON.stringify(this.state.editorContent)}</p>
                    <p>转化后的值：</p>
                    <p>{draftjs(this.state.editorContent)}</p>
                </Modal>
            </div>
        );
    }
}