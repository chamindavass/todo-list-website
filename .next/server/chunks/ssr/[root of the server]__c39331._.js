module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/components/to-do list.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
const e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement;
const PersistentTodoList = ()=>{
    const [todos, setTodos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newTodo, setNewTodo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingText, setEditingText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [backgroundImage, setBackgroundImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            try {
                setTodos(JSON.parse(storedTodos));
            } catch (error) {
                console.error("Error parsing stored todos:", error);
            }
        }
        fetch("https://source.unsplash.com/1920x1080/?pastel,nature").then((response)=>setBackgroundImage(response.url));
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [
        todos
    ]);
    const handleAddTodo = ()=>{
        if (!newTodo.trim()) return;
        setTodos([
            {
                id: Date.now(),
                text: newTodo,
                completed: false
            },
            ...todos
        ]);
        setNewTodo("");
    };
    const handleToggleCompleted = (id)=>{
        setTodos(todos.map((todo)=>todo.id === id ? {
                ...todo,
                completed: !todo.completed
            } : todo));
    };
    const handleDeleteTodo = (id)=>{
        setTodos(todos.filter((todo)=>todo.id !== id));
    };
    const handleClearAll = ()=>{
        setTodos([]);
    };
    const handleEditTodo = (id, text)=>{
        setEditingId(id);
        setEditingText(text);
    };
    const handleSaveEdit = (id)=>{
        setTodos(todos.map((todo)=>todo.id === id ? {
                ...todo,
                text: editingText
            } : todo));
        setEditingId(null);
        setEditingText("");
    };
    return e('div', {
        className: "min-h-screen bg-cover bg-center flex items-center justify-center relative overflow-hidden",
        style: {
            backgroundImage: `url(${backgroundImage})`
        }
    }, e('div', {
        className: "absolute inset-0 bg-gradient-to-br from-pink-200/40 via-blue-200/40 to-green-200/40 animate-soft-gradient"
    }), e(motion.div, {
        initial: {
            opacity: 0,
            scale: 0.95
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        transition: {
            duration: 0.6,
            ease: "easeOut"
        },
        className: "relative z-10 w-full max-w-4xl p-10 rounded-3xl shadow-lg backdrop-blur-sm bg-white/30 border border-white/50"
    }, e('h1', {
        className: "text-5xl font-bold text-gray-800 mb-8 text-center tracking-wide"
    }, "Persistent To-Do List"), e('form', {
        onSubmit: (e)=>e.preventDefault(),
        className: "flex mb-6"
    }, e('input', {
        type: "text",
        value: newTodo,
        onChange: (e)=>setNewTodo(e.target.value),
        placeholder: "Add a task...",
        className: "flex-1 p-4 pl-6 text-lg text-gray-700 bg-white/50 border border-gray-200 rounded-l-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-300/50 placeholder-gray-500"
    }), e(motion.button, {
        whileHover: {
            scale: 1.03
        },
        whileTap: {
            scale: 0.98
        },
        type: "submit",
        onClick: handleAddTodo,
        className: "p-4 px-6 text-lg font-semibold text-white bg-gradient-to-r from-blue-400 to-purple-400 rounded-r-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300/50 transition-all duration-300"
    }, "Add")), e('ul', {
        className: "space-y-3"
    }, e(AnimatePresence, null, todos.map((todo)=>e(motion.li, {
            key: todo.id,
            initial: {
                opacity: 0,
                y: 10
            },
            animate: {
                opacity: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                y: -10
            },
            transition: {
                duration: 0.4
            },
            className: `flex items-center p-4 bg-white/40 backdrop-blur-sm rounded-lg shadow-sm border-l-4 transition-all duration-300 ease-in-out hover:shadow-md ${todo.completed ? "border-green-300" : "border-blue-300"}`
        }, e('input', {
            type: "checkbox",
            checked: todo.completed,
            onChange: ()=>handleToggleCompleted(todo.id),
            className: "mr-4 h-5 w-5 text-blue-400 rounded-full focus:ring-blue-300 focus:ring-offset-0 focus:ring-2 transition-all duration-200"
        }), editingId === todo.id ? e('input', {
            type: "text",
            value: editingText,
            onChange: (e)=>setEditingText(e.target.value),
            className: "flex-1 p-2 text-lg text-gray-700 bg-white/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300/50"
        }) : e('span', {
            className: `flex-1 text-lg font-medium transition-all duration-300 ease-in-out ${todo.completed ? "text-gray-400 line-through" : "text-gray-700"}`
        }, todo.text), editingId === todo.id ? e(motion.button, {
            whileHover: {
                scale: 1.05
            },
            whileTap: {
                scale: 0.95
            },
            onClick: ()=>handleSaveEdit(todo.id),
            className: "ml-2 p-2 text-green-600 bg-green-100 rounded-lg hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-300/50 transition-all duration-200"
        }, "Save") : e(motion.button, {
            whileHover: {
                scale: 1.05
            },
            whileTap: {
                scale: 0.95
            },
            onClick: ()=>handleEditTodo(todo.id, todo.text),
            className: "ml-2 p-2 text-blue-600 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300/50 transition-all duration-200"
        }, "Edit"), e(motion.button, {
            whileHover: {
                scale: 1.05
            },
            whileTap: {
                scale: 0.95
            },
            onClick: ()=>handleDeleteTodo(todo.id),
            className: "ml-2 p-2 text-red-600 bg-red-100 rounded-lg hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-300/50 transition-all duration-200"
        }, "Delete"))))), todos.length > 0 && e('div', {
        className: "flex justify-center mt-8"
    }, e(motion.button, {
        whileHover: {
            scale: 1.05
        },
        whileTap: {
            scale: 0.95
        },
        onClick: handleClearAll,
        className: "p-3 px-6 text-lg font-semibold text-white bg-gradient-to-r from-red-400 to-pink-400 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-300/50 transition-all duration-300"
    }, "Clear All"))));
};
const __TURBOPACK__default__export__ = PersistentTodoList;
}}),
"[project]/src/app/page.js [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            module.exports = __turbopack_require__("[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)");
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_require__("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__c39331._.js.map