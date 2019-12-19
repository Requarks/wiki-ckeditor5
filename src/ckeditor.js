/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import DecoupledEditorBase from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount';

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg';

export default class DecoupledEditor extends DecoupledEditorBase {}

/* global WIKI */

class InsertAsset extends Plugin {
	init() {
		const editor = this.editor;

		editor.ui.componentFactory.add( 'insertAsset', locale => {
			const view = new ButtonView( locale );

			view.set( {
				label: 'Insert Assets',
				icon: imageIcon,
				tooltip: true
			} );

			view.on( 'execute', () => {
				WIKI.$store.set( 'editor/activeModal', 'editorModalMedia' );
			} );

			return view;
		} );
	}
}

// Plugins to include in the build.
DecoupledEditor.builtinPlugins = [
	Essentials,
	Alignment,
	FontSize,
	FontFamily,
	Highlight,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	Strikethrough,
	Underline,
	BlockQuote,
	CKFinder,
	Heading,
	Image,
	ImageCaption,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	InsertAsset,
	Link,
	List,
	Indent,
	Code,
	CodeBlock,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	RemoveFormat,
	Table,
	TableToolbar,
	TodoList,
	WordCount
];

// Editor configuration.
DecoupledEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'fontsize',
			'fontfamily',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'highlight',
			'|',
			'alignment',
			'|',
			'numberedList',
			'bulletedList',
			'todoList',
			'|',
			'indent',
			'outdent',
			'|',
			'code',
			'codeblock',
			'|',
			'link',
			'blockquote',
			'insertAsset',
			'insertTable',
			'mediaEmbed',
			'|',
			'removeFormat',
			'|',
			'undo',
			'redo'
		]
	},
	heading: {
		options: [
			{ model: 'paragraph', title: 'Paragraph', class: '' },
			{ model: 'heading1', view: 'h1', title: 'Heading 1', class: '' },
			{ model: 'heading2', view: 'h2', title: 'Heading 2', class: '' },
			{ model: 'heading3', view: 'h3', title: 'Heading 3', class: '' },
			{ model: 'heading4', view: 'h4', title: 'Heading 4', class: '' },
			{ model: 'heading5', view: 'h5', title: 'Heading 5', class: '' },
			{ model: 'heading6', view: 'h6', title: 'Heading 6', class: '' }
		]
	},
	image: {
		styles: [
			'full',
			'alignLeft',
			'alignCenter',
			'alignRight'
		],
		toolbar: [
			'imageStyle:full',
			'imageStyle:alignLeft',
			'imageStyle:alignCenter',
			'imageStyle:alignRight',
			'|',
			'imageTextAlternative'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	codeBlock:	{ 
		languages: [
			{ language: 'plaintext', label: 'Plain text' },
			{ language: 'bash', label: 'Bash' },
			{ language: 'c', label: 'C' },
			{ language: 'cpp', label: 'C++' },
			{ language: 'css', label: 'CSS' },
			{ language: 'java', label: 'Java' },
			{ language: 'json', label: 'JSON' },
			{ language: 'kotlin', label: 'Kotlin' },
			{ language: 'javascript', label: 'JavaScript' },
			{ language: 'python', label: 'Python' },
			{ language: 'sql', label: 'SQL' },
			{ language: 'swift', label: 'Swift' },
			{ language: 'typescript', label: 'TypeScript' },
			{ language: 'yaml', label: 'YAML' },
			{ language: 'go', label: 'Go' }
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
