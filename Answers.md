# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

ReactJS is a JavaScript library. ReactJS is an open-source JavaScript library which is used for building user interfaces specifically for single page applications. Creative programmers discovered how React.js solves problems of better handling of dynamic data for faster response times. It lets you design simple views for every application state. React.js, as its name implies, responds to data changes instantly and renders the right components for a smooth user experience


1. What does it mean to think in react?

Thinking in React has five steps basically:
Step 1: Break The UI Into A Component Hierarchy
Step 2: Build A Static Version in React
Step 3: Identify The Minimal (but complete) Representation Of UI State
Step 4: Identify Where Your State Should Live
Step 5: Add Inverse Data Flow

1. Describe state.

A state is simply an Object that stores information for the component

1. Describe props.

Props Stores information/data that is passed to other components. 

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

A "side effect" is anything that affects something outside the scope of the function being executed. These can be, say, a network request, which has your code communicating with a third party (and thus making the request, causing logs to be recorded, caches to be saved or updated, all sorts of effects that are outside the function.

There are more subtle side effects, too. Changing the value of a closure-scoped variable is a side effect. Pushing a new item onto an array that was passed in as an argument is a side effect. Functions that execute without side effects are called "pure" functions: they take in arguments, and they return values. Nothing else happens upon executing the function. This makes the easy to test, simple to reason about, and functions that meet this description have all sorts of useful properties when it comes to optimization or refactoring.

To  sync effects in a React component to state or prop changes we use the Effect Hook.