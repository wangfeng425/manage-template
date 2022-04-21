import React, { useState } from 'react'
import { Card } from 'antd'
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'
import draftToMarkdown from 'draftjs-to-markdown'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const draft = () => {
  const [editorState, setEditorState] = useState('')
  const [editorContent, setEditorContent] = useState('')

  const onEditorChange = (editorContent: any) => {
    setEditorContent(editorContent)
  }

  const onEditorStateChange = (editorState: any) => {
    setEditorState(editorState)
  }
  return (
    <div className="pt10">
      <Card bordered={false}
        title="富文本">
        <span>此页面用到的富文本插件是react-draft-wysiwyg和draftjs-to-html</span>
      </Card>
      <div className="mt10 p24 bg-white">
        <Editor
          editorClassName="h300 bg-white pl10"
          editorState={editorState}
          onContentStateChange={onEditorChange}
          onEditorStateChange={onEditorStateChange}
          toolbarClassName="p0 mb0 border-bottom-line"
          wrapperClassName="border-line"
        />
      </div>
      <div className="mt10 flex flex-hj">
        <Card bordered={false}
          className="wp33 h250"
          title="同步转换HTML">
          <span>{draftToHtml(editorContent)}</span>
        </Card>
        <Card bordered={false}
          className="wp33"
          title="同步转换MarkDown">
          <span>{draftToMarkdown(editorContent)}</span>
        </Card>
        <Card bordered={false}
          className="wp33 word-break"
          title="同步转换JSON">
          <span>{editorContent && JSON.stringify(editorContent)}</span>
        </Card>
      </div>
    </div>
  )
}

export default draft