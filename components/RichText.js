import React, { useCallback, useMemo, useState } from 'react'
import isHotkey from 'is-hotkey'
import { Editable, withReact, useSlate, Slate } from 'slate-react'
import { Editor, Transforms, createEditor } from 'slate'
import { withHistory } from 'slate-history'

import { FormatBold, FormatItalic, FormatUnderlined, Code, LooksOne, LooksTwo, Looks3, FormatQuote, FormatListNumbered, FormatListBulleted } from '@material-ui/icons';

const HOTKEYS = {
    'mod+b': 'bold',
    'mod+i': 'italic',
    'mod+u': 'underline',
    'mod+`': 'code',
}

const LIST_TYPES = ['numbered-list', 'bulleted-list']

const RichText = (props) => {
    const [value, setValue] = useState(initialValue)
    const renderElement = useCallback(props => <Element {...props} />, [])
    const renderLeaf = useCallback(props => <Leaf {...props} />, [])
    const editor = useMemo(() => withHistory(withReact(createEditor())), [])

    const onChange = (value) => {
        setValue(value);
        props.parentCallback(value);
    }

    return (
        <Slate className="richtext" editor={editor} value={ props.data ? JSON.parse(props.data) : value} onChange={onChange}>
            <div className="richtext-icons">
                <MarkButton format="bold" icon="format_bold" />
                <MarkButton format="italic" icon="format_italic" />
                <MarkButton format="underline" icon="format_underlined" />
                <MarkButton format="code" icon="code" />
                <BlockButton format="heading-one" icon="looks_one" />
                <BlockButton format="heading-two" icon="looks_two" />
                <BlockButton format="heading-three" icon="looks_three" />
                <BlockButton format="block-quote" icon="format_quote" />
                <BlockButton format="numbered-list" icon="format_list_numbered" />
                <BlockButton format="bulleted-list" icon="format_list_bulleted" />
            </div>
            <Editable
                className="richtext-content"
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                placeholder=""
                spellCheck
                onKeyDown={event => {
                    for (const hotkey in HOTKEYS) {
                        if (isHotkey(hotkey, event)) {
                            event.preventDefault()
                            const mark = HOTKEYS[hotkey]
                            toggleMark(editor, mark)
                        }
                    }
                }}
            />
        </Slate>
    )
}

const toggleBlock = (editor, format) => {
    const isActive = isBlockActive(editor, format)
    const isList = LIST_TYPES.includes(format)

    Transforms.unwrapNodes(editor, {
        match: n => LIST_TYPES.includes(n.type),
        split: true,
    })

    Transforms.setNodes(editor, {
        type: isActive ? 'paragraph' : isList ? 'list-item' : format,
    })

    if (!isActive && isList) {
        const block = { type: format, children: [] }
        Transforms.wrapNodes(editor, block)
    }
}

const toggleMark = (editor, format) => {
    const isActive = isMarkActive(editor, format)

    if (isActive) {
        Editor.removeMark(editor, format)
    } else {
        Editor.addMark(editor, format, true)
    }
}

const isBlockActive = (editor, format) => {
    const [match] = Editor.nodes(editor, {
        match: n => n.type === format,
    })

    return !!match
}

const isMarkActive = (editor, format) => {
    const marks = Editor.marks(editor)
    return marks ? marks[format] === true : false
}

const Element = ({ attributes, children, element }) => {
    switch (element.type) {
        case 'block-quote':
            return <blockquote {...attributes}>{children}</blockquote>
        case 'bulleted-list':
            return <ul {...attributes}>{children}</ul>
        case 'heading-one':
            return <h1 {...attributes}>{children}</h1>
        case 'heading-two':
            return <h2 {...attributes}>{children}</h2>
        case 'heading-three':
            return <h3 {...attributes}>{children}</h3>
        case 'list-item':
            return <li {...attributes}>{children}</li>
        case 'numbered-list':
            return <ol {...attributes}>{children}</ol>
        default:
            return <p {...attributes}>{children}</p>
    }
}

const Leaf = ({ attributes, children, leaf }) => {
    if (leaf.bold) {
        children = <strong>{children}</strong>
    }

    if (leaf.code) {
        children = <code>{children}</code>
    }

    if (leaf.italic) {
        children = <em>{children}</em>
    }

    if (leaf.underline) {
        children = <u>{children}</u>
    }

    return <span {...attributes}>{children}</span>
}

const BlockButton = ({ format, icon }) => {
    const editor = useSlate()
    const isActive = isBlockActive(editor, format);
    function ButtonIcon(){
        if(icon === 'looks_one') {
            return <LooksOne />;
        } else if (icon === 'looks_two') {
            return <LooksTwo />;
        } else if (icon === 'looks_three') {
            return <Looks3 />;
        } else if (icon === 'format_quote') {
            return <FormatQuote />;
        } else if (icon === 'format_list_numbered') {
            return <FormatListNumbered />;
        } else if (icon === 'format_list_bulleted') {
            return <FormatListBulleted />;
        } else {
            return 'click'
        }
    }
    return (
        <span
            className={isActive ? 'active' : ''}
            onMouseDown={event => {
                event.preventDefault()
                toggleBlock(editor, format)
            }}
        ><ButtonIcon /></span>
    )
}

const MarkButton = ({ format, icon }) => {
    const editor = useSlate();
    const isActive = isMarkActive(editor, format);
    function ButtonIcon(){
        if(icon === 'format_bold') {
            return <FormatBold />;
        } else if (icon === 'format_italic') {
            return <FormatItalic />;
        } else if (icon === 'format_underlined') {
            return <FormatUnderlined />;
        } else if (icon === 'code') {
            return <Code />;
        } else {
            return 'click'
        }
    }
    return (
        <span
            className={isActive ? 'active' : ''}
            onMouseDown={event => {
                event.preventDefault()
                toggleMark(editor, format)
            }}
        ><ButtonIcon /> </span>
    )
}

const initialValue = [
    {
        type: 'paragraph',
        children: [
            { text: '' }
        ],
    },
]

export default RichText;