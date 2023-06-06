# TypeScript_Intro
### 1. Create project

```jsx
1. npm init -y
```

### 2. Install typescript

```jsx
npm install typescript -g

// tsc -v (To check if TS is installed)
// npm list -g (To get list of packages installed globally)
```

### 3. Create “`tsconfig.json`” file
{
    "include": ["src"],
    "exclude": ["node_modules"],
    "compilerOptions": {
        "module": "commonjs",
        "outDir": "build",
        "target": "es2017",
        "declaration": true,
        "sourceMap": true
    }
}

### 4. Write script inside `package.json`

```jsx
{
	"build": "tsc --watch"
}
```

### 5. Create src folder and inside `index.ts` file

### 6. Run command `npm run build`