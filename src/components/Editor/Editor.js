import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//@ckeditor/ckeditor5-image
import { CloudinaryImageUploadAdapter } from 'ckeditor-cloudinary-uploader-adapter';


function imagePluginFactory(editor) {
    editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {
        return new CloudinaryImageUploadAdapter( loader, 'petlasblog', 'PostAsset');
    };
};

const editorConfiguration = {
    extraPlugins: [imagePluginFactory],

}; 


class Editor extends Component {

    render() {
        return (
            <div className="App">
                <CKEditor
                    editor={ ClassicEditor }
                    config={editorConfiguration}
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
            </div>
        );
    }
}

export default Editor;