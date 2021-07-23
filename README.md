# something

using codemirror to do a "codepen" like page and storing it in ```local storage``` :D lol

you can import add ons for special features ```Controlled``` options

https://codemirror.net/doc/manual.html#addons

the website will tell you in which folder it is located and it can be imported as such:

```javascript
import 'codemirror/addon/edit/matchtags.js'
```

```javascript
import { Controlled as ControlledEditor } from 'react-codemirror2'
import 'codemirror/addon/edit/matchtags.js'

<ControlledEditor 
  onBeforeChange={handleChange}
  value={value}
  className="code-mirror-wrapper"
  options={{
   lineWrapping: true,
   lint: true,
   mode: language,
   lineNumbers: true,
   indentWithTabs: true,
   matchTags: true       // <-----
   }}
/>
```
