/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

"use strict";

export const cqlLanguageConfig: monaco.languages.LanguageConfiguration = {
    comments: {
        lineComment: "--",
        blockComment: ["/*", "*/"],
    },
    brackets: [
        ["{", "}"],
        ["[", "]"],
        ["(", ")"],
    ],
    autoClosingPairs: [
        { open: "{", close: "}" },
        { open: "[", close: "]" },
        { open: "(", close: ")" },
        { open: "\"", close: "\"" },
        { open: "'", close: "'" },
        { open: "/*", close: "*/" },
    ],
    surroundingPairs: [
        { open: "<", close: ">" },
        { open: "{", close: "}" },
        { open: "[", close: "]" },
        { open: "(", close: ")" },
        { open: "\"", close: "\"" },
        { open: "'", close: "'" },
    ],
};

export const cqlTokenProvider = <monaco.languages.IMonarchLanguage>{
    defaultToken: "",
    tokenPostfix: ".cql",
    ignoreCase: true,
    keywords: [
        "ADD", "AGGREGATE",
        "ALL", "ALLOW", "ALTER", "AND", "ANY", "APPLY", "AS", "ASC",
        "AUTHORIZE", "BATCH", "BEGIN", "BY", "CALLED", "CLUSTERING",
        "COLUMNFAMILY", "COMPACT", "CONTAINS", "CONSISTENCY",
        "COUNT", "CREATE", "CUSTOM", "DELETE", "DESC", "DISTINCT", "DROP",
        "EACH_QUORUM", "ENTRIES", "EXISTS", "FINALFUNC", "FILTERING", "FROM", "FULL",
        "FUNCTION", "FUNCTIONS", "GRANT", "IF", "IN", "INITCOND", "IS", "INPUT", "INDEX", "INFINITY",
        "INSERT", "INTO", "KEY", "KEYS", "KEYSPACE", "KEYSPACES", "LANGUAGE",
        "LEVEL", "LIMIT", "LOCAL_ONE", "LOCAL_QUORUM", "MATERIALIZED", "MODIFY", "NAN",
        "NORECURSIVE", "NOSUPERUSER", "NOT", "OF", "ON", "ONE", "ORDER", "OR",
        "PASSWORD", "PER", "PERMISSION", "PERMISSIONS",
        "PRIMARY", "QUORUM", "RENAME", "RETURNS", "REVOKE", "REPLACE", "ROLES", "SCHEMA", "SELECT",
        "SFUNC", "SET", "STATIC", "STYPE",
        "STORAGE", "SUPERUSER", "TABLE", "THREE", "TO", "TOKEN", "TRUNCATE", "TTL",
        "TWO", "TYPE", "UNLOGGED", "UPDATE", "USE", "USER", "USERS", "USING", "VALUES",
        "VIEW", "WHERE", "WITH", "WRITETIME",
    ],
    typeKeywords: [
        "ascii", "bigint", "blob", "boolean", "counter", "date", "decimal",
        "double", "float", "inet", "int",
        "smallint", "text", "time", "timestamp", "timeuuid", "tinyint",
        "uuid", "varchar", "varint",
        // "list", "map", "set","tuple","frozen"
    ],
    operators: [
        "=", "<", ">", ">=", "<=",
    ],
    brackets: [
        { open: "[", close: "]", token: "delimiter.square" },
        { open: "(", close: ")", token: "delimiter.parenthesis" },
        { open: "<", close: ">", token: "delimiter.angle" },
        { open: "{", close: "}", token: "delimiter.curly" },
    ],
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    null: ["null"],
    tokenizer: {
        root: [
            { include: "@comments" },
            { include: "@whitespace" },
            { include: "@numbers" },

            [/PRIMARY/, "keyword.primary-key", "@primary_key"],
            [/(list|map|set|frozen|tuple)(\s*<)(?![^>]+>\s*(?:\(|$))/,
                ["type.identifier", { token: "delimiter.type.definition", next: "@type" }],
            ],

            [/[a-zA-z][a-z0-9A-z]*(?=\.)/, "type.keyspace"],
            [/[{}()\[\]]/, "@brackets"],
            [/@symbols/, {
                cases: {
                    "@operators": "operator",

                },
            }],
            // identifiers and keywords
            [/[a-zA-Z0-9_]\w*/, {
                cases: {
                    "@keywords": { token: "keyword" },
                    "@typeKeywords": { token: "type" },
                    "@null": { token: "type.null" },
                    "@default": { token: "identifier" },
                },
            }],
            [/"/, "string", "@doubleQuotedString"],
            [/'/, "string", "@singleQuotedString"],
            [/\$\$/, "code.delimiter", "@codeQuotedString"],

            [/[,]/, "delimiter.comma"],
            [/[;]/, "delimiter.statement"],
            [/[\.]/, "delimiter.dot"],
        ],
        primary_key: [
            { include: "@whitespace" },
            [/[a-zA-Z0-9]*/, {
                cases: {
                    "[kK][eE][yY]": {
                        token: "keyword.primary-key", next: "@pop",
                    },
                    "@default": { token: "invalid", next: "@pop" },
                },
            }],
        ],
        called_on_null_input: [
            { include: "@whitespace" },
            [/[a-zA-Z0-9]*/, {
                cases: {
                    "@keywords": { token: "keyword" },
                    "@null": { token: "type.null" },
                    "[Ii][Nn][Pp][Uu][Tt]": { token: "keyword", next: "@pop" },
                    "@default": { token: "invalid", next: "@pop" },
                },
            }],
        ],
        returns_null_on_null_input: [
            { include: "@whitespace" },
            [/[a-zA-Z0-9]*/, {
                cases: {
                    "@keywords": { token: "keyword" },
                    "@typeKeywords": { token: "type" },
                    "@null": { token: "type.null" },
                    "[Ii][Nn][Pp][Uu][Tt]": { token: "keyword", next: "@pop" },
                    "@default": { token: "invalid", next: "@pop" },
                },
            }],
        ],
        whitespace: [
            [/[ \t\r\n]+/, "white"],
        ],
        qualified: [
            [/[a-zA-Z_][\w]*/, {
                cases: {
                    // '@typeFollows': { token: 'keyword', next: '@type' },
                    // '@typeKeywords': 'type.identifier',
                    // '@keywords': 'keyword',
                    "@default": "identifier",
                },
            }],
            ["", "", "@pop"],
        ],
        type: [
            // [/[A-Z]\w*/, "type.identifier"],
            // identifiers and keywords
            [/[a-zA-Z_]\w*/, {
                cases: {
                    "@typeKeywords": "type.identifier",
                    // "@keywords": { token: "@rematch", next: "@popall" },
                    "@keywords": { token: "keyword", next: "@pop" },
                    "@default": "type.identifier",
                },
            }],
            [/[<]/, "delimiter.type.definition", "@type_nested"],
            [/[>]/, "delimiter.type.definition", "@pop"],
            [/[\.,:]/, {
                cases: {
                    "@keywords": "keyword",
                    "@default": "delimiter",
                },
            }],
            { include: "@whitespace" },
            // ["", "", "@popall"], // catch all
        ],
        type_nested: [
            { include: "@whitespace" },
            [/[<]/, "delimiter.type.definition", "@type_nested"],
            { include: "type" },
        ],
        comments: [
            [/--+.*/, "comment"],
            [/\/\*/, { token: "comment.quote", next: "@comment" }],
        ],
        comment: [
            [/[^*/]+/, "comment"],
            // Not supporting nested comments, as nested comments seem to not be standard?
            // i.e. http://stackoverflow.com/questions/728172/are-there-multiline-comment-delimiters-in-sql-that-are-vendor-agnostic
            // [/\/\*/, { token: 'comment.quote', next: '@push' }],    // nested comment not allowed :-(
            [/\*\//, { token: "comment.quote", next: "@pop" }],
            [/./, "comment"],
        ],
        numbers: [
            // [/0[xX][0-9a-fA-F]*/, "number"],
            [/[\-]?\d+(\.\d+)?/, "number"],
            [/((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/, "number"],
        ],
        // numbers: [
        //     [/0[xX][0-9a-fA-F]*/, "number"],
        //     [/[$][+-]*\d*(\.\d*)?/, "number"],
        //     // [/[+-]*\d*(\.\d*)?/, "number"],
        //     [/((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/, "number"],
        // ],
        doubleQuotedString: [
            [/[^\\"]+/, "string"],
            [/@escapes/, "string.escape"],
            [/\\./, "string.escape.invalid"],
            [/"/, "string", "@pop"],
        ],
        singleQuotedString: [
            [/[^\\']+/, "string"],
            [/@escapes/, "string.escape"],
            [/\\./, "string.escape.invalid"],
            [/'/, "string", "@pop"],
        ],
        codeQuotedString: [
            [/[^\$]+/, "code"],
            [/[\$](?!\$)+/, "code"],
            [/@escapes/, "string.escape"],
            [/\\./, "string.escape.invalid"],
            [/\$\$/, "code.delimiter", "@pop"],
        ],
    },
};