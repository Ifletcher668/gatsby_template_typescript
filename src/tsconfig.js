export default {
    compilerOptions: {
        target: 'esnext',
        module: 'commonjs',
        lib: ['dom', 'ES2015', 'ES2017'],
        jsx: 'preserve',

        removeComments: false,
        noEmit: true,

        strict: true,
        alwaysStrict: true,
        isolatedModules: true,
        noImplicitAny: true,
        strictNullChecks: true,
        strictFunctionTypes: true,
        strictBindCallApply: true,
        strictPropertyInitialization: true,
        noImplicitThis: true,
        noUnusedLocals: true,

        esModuleInterop: true,
        skipLibCheck: true,
        forceConsistentCasingInFileNames: true,
        preserveConstEnums: true,
    },
    include: ['template-src/**/*'],
};
