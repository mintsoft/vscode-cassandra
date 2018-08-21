// Generated from CqlParser.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { CqlParserListener } from './CqlParserListener';
import { CqlParserVisitor } from './CqlParserVisitor';


export class CqlParser extends Parser {
	public static readonly LR_BRACKET=1;
	public static readonly RR_BRACKET=2;
	public static readonly LC_BRACKET=3;
	public static readonly RC_BRACKET=4;
	public static readonly LS_BRACKET=5;
	public static readonly RS_BRACKET=6;
	public static readonly COMMA=7;
	public static readonly SEMI=8;
	public static readonly COLON=9;
	public static readonly DQUOTE=10;
	public static readonly SQUOTE=11;
	public static readonly SPACE=12;
	public static readonly SPEC_MYSQL_COMMENT=13;
	public static readonly COMMENT_INPUT=14;
	public static readonly LINE_COMMENT=15;
	public static readonly DOT=16;
	public static readonly STAR=17;
	public static readonly DIVIDE=18;
	public static readonly MODULE=19;
	public static readonly PLUS=20;
	public static readonly MINUSMINUS=21;
	public static readonly MINUS=22;
	public static readonly K_ADD=23;
	public static readonly K_AGGREGATE=24;
	public static readonly K_ALL=25;
	public static readonly K_ALLOW=26;
	public static readonly K_ALTER=27;
	public static readonly K_AND=28;
	public static readonly K_ANY=29;
	public static readonly K_APPLY=30;
	public static readonly K_AS=31;
	public static readonly K_ASC=32;
	public static readonly K_AUTHORIZE=33;
	public static readonly K_BATCH=34;
	public static readonly K_BEGIN=35;
	public static readonly K_BY=36;
	public static readonly K_CALLED=37;
	public static readonly K_CLUSTERING=38;
	public static readonly K_COLUMNFAMILY=39;
	public static readonly K_COMPACT=40;
	public static readonly K_CONSISTENCY=41;
	public static readonly K_CONTAINS=42;
	public static readonly K_CREATE=43;
	public static readonly K_CUSTOM=44;
	public static readonly K_DELETE=45;
	public static readonly K_DESC=46;
	public static readonly K_DESCRIBE=47;
	public static readonly K_DISTINCT=48;
	public static readonly K_DROP=49;
	public static readonly K_DURABLE_WRITES=50;
	public static readonly K_EACH_QUORUM=51;
	public static readonly K_ENTRIES=52;
	public static readonly K_EXECUTE=53;
	public static readonly K_EXISTS=54;
	public static readonly K_FALSE=55;
	public static readonly K_FILTERING=56;
	public static readonly K_FINALFUNC=57;
	public static readonly K_FROM=58;
	public static readonly K_FULL=59;
	public static readonly K_FUNCTION=60;
	public static readonly K_FUNCTIONS=61;
	public static readonly K_GRANT=62;
	public static readonly K_IF=63;
	public static readonly K_IN=64;
	public static readonly K_INDEX=65;
	public static readonly K_INFINITY=66;
	public static readonly K_INITCOND=67;
	public static readonly K_INPUT=68;
	public static readonly K_INSERT=69;
	public static readonly K_INTO=70;
	public static readonly K_IS=71;
	public static readonly K_KEY=72;
	public static readonly K_KEYS=73;
	public static readonly K_KEYSPACE=74;
	public static readonly K_KEYSPACES=75;
	public static readonly K_LANGUAGE=76;
	public static readonly K_LEVEL=77;
	public static readonly K_LIMIT=78;
	public static readonly K_LOCAL_ONE=79;
	public static readonly K_LOCAL_QUORUM=80;
	public static readonly K_LOGGED=81;
	public static readonly K_LOGIN=82;
	public static readonly K_MATERIALIZED=83;
	public static readonly K_MODIFY=84;
	public static readonly K_NAN=85;
	public static readonly K_NORECURSIVE=86;
	public static readonly K_NOSUPERUSER=87;
	public static readonly K_NOT=88;
	public static readonly K_NULL=89;
	public static readonly K_OF=90;
	public static readonly K_ON=91;
	public static readonly K_ONE=92;
	public static readonly K_OPTIONS=93;
	public static readonly K_OR=94;
	public static readonly K_ORDER=95;
	public static readonly K_PARTITION=96;
	public static readonly K_PASSWORD=97;
	public static readonly K_PER=98;
	public static readonly K_PERMISSION=99;
	public static readonly K_PERMISSIONS=100;
	public static readonly K_PRIMARY=101;
	public static readonly K_QUORUM=102;
	public static readonly K_RENAME=103;
	public static readonly K_REPLACE=104;
	public static readonly K_REPLICATION=105;
	public static readonly K_RETURNS=106;
	public static readonly K_REVOKE=107;
	public static readonly K_ROLE=108;
	public static readonly K_ROLES=109;
	public static readonly K_SCHEMA=110;
	public static readonly K_SELECT=111;
	public static readonly K_SET=112;
	public static readonly K_SFUNC=113;
	public static readonly K_STATIC=114;
	public static readonly K_STORAGE=115;
	public static readonly K_STYPE=116;
	public static readonly K_SUPERUSER=117;
	public static readonly K_TABLE=118;
	public static readonly K_THREE=119;
	public static readonly K_TIMESTAMP=120;
	public static readonly K_TO=121;
	public static readonly K_TOKEN=122;
	public static readonly K_TRIGGER=123;
	public static readonly K_TRUE=124;
	public static readonly K_TRUNCATE=125;
	public static readonly K_TTL=126;
	public static readonly K_TWO=127;
	public static readonly K_TYPE=128;
	public static readonly K_UNLOGGED=129;
	public static readonly K_UPDATE=130;
	public static readonly K_USE=131;
	public static readonly K_USER=132;
	public static readonly K_USING=133;
	public static readonly K_UUID=134;
	public static readonly K_VALUES=135;
	public static readonly K_VIEW=136;
	public static readonly K_WHERE=137;
	public static readonly K_WITH=138;
	public static readonly K_WRITETIME=139;
	public static readonly K_ASCII=140;
	public static readonly K_BIGINT=141;
	public static readonly K_BLOB=142;
	public static readonly K_BOOLEAN=143;
	public static readonly K_COUNTER=144;
	public static readonly K_DATE=145;
	public static readonly K_DECIMAL=146;
	public static readonly K_DOUBLE=147;
	public static readonly K_FLOAT=148;
	public static readonly K_FROZEN=149;
	public static readonly K_INET=150;
	public static readonly K_INT=151;
	public static readonly K_LIST=152;
	public static readonly K_MAP=153;
	public static readonly K_SMALLINT=154;
	public static readonly K_TEXT=155;
	public static readonly K_TIMEUUID=156;
	public static readonly K_TIME=157;
	public static readonly K_TINYINT=158;
	public static readonly K_TUPLE=159;
	public static readonly K_VARCHAR=160;
	public static readonly K_VARINT=161;
	public static readonly K_USERS=162;
	public static readonly CODE_BLOCK=163;
	public static readonly STRING_LITERAL=164;
	public static readonly DECIMAL_LITERAL=165;
	public static readonly FLOAT_LITERAL=166;
	public static readonly HEXADECIMAL_LITERAL=167;
	public static readonly REAL_LITERAL=168;
	public static readonly OBJECT_NAME=169;
	public static readonly UUID=170;
	public static readonly OPERATOR_EQ=171;
	public static readonly OPERATOR_LT=172;
	public static readonly OPERATOR_GT=173;
	public static readonly OPERATOR_LTE=174;
	public static readonly OPERATOR_GTE=175;
	public static readonly RULE_root = 0;
	public static readonly RULE_cqls = 1;
	public static readonly RULE_statementSeparator = 2;
	public static readonly RULE_empty = 3;
	public static readonly RULE_cql = 4;
	public static readonly RULE_revoke = 5;
	public static readonly RULE_listUsers = 6;
	public static readonly RULE_listRoles = 7;
	public static readonly RULE_listPermissions = 8;
	public static readonly RULE_grant = 9;
	public static readonly RULE_priviledge = 10;
	public static readonly RULE_resource = 11;
	public static readonly RULE_createUser = 12;
	public static readonly RULE_createRole = 13;
	public static readonly RULE_createType = 14;
	public static readonly RULE_typeMemberColumnList = 15;
	public static readonly RULE_createTrigger = 16;
	public static readonly RULE_createMaterializedView = 17;
	public static readonly RULE_materializedViewWhere = 18;
	public static readonly RULE_columnNotNullList = 19;
	public static readonly RULE_columnNotNull = 20;
	public static readonly RULE_materializedViewOptions = 21;
	public static readonly RULE_createKeyspace = 22;
	public static readonly RULE_createFunction = 23;
	public static readonly RULE_codeBlock = 24;
	public static readonly RULE_paramList = 25;
	public static readonly RULE_returnMode = 26;
	public static readonly RULE_createAggregate = 27;
	public static readonly RULE_initCondDefinition = 28;
	public static readonly RULE_initCondHash = 29;
	public static readonly RULE_initCondHashItem = 30;
	public static readonly RULE_initCondListNested = 31;
	public static readonly RULE_initCondList = 32;
	public static readonly RULE_orReplace = 33;
	public static readonly RULE_alterUser = 34;
	public static readonly RULE_userPassword = 35;
	public static readonly RULE_userSuperUser = 36;
	public static readonly RULE_alterType = 37;
	public static readonly RULE_alterTypeOperation = 38;
	public static readonly RULE_alterTypeRename = 39;
	public static readonly RULE_alterTypeRenameList = 40;
	public static readonly RULE_alterTypeRenameItem = 41;
	public static readonly RULE_alterTypeAdd = 42;
	public static readonly RULE_alterTypeAlterType = 43;
	public static readonly RULE_alterTable = 44;
	public static readonly RULE_alterTableOperation = 45;
	public static readonly RULE_alterTableWith = 46;
	public static readonly RULE_alterTableRename = 47;
	public static readonly RULE_alterTableDropCompactStorage = 48;
	public static readonly RULE_alterTableDropColumns = 49;
	public static readonly RULE_alterTableDropColumnList = 50;
	public static readonly RULE_alterTableAdd = 51;
	public static readonly RULE_alterTableColumnDefinition = 52;
	public static readonly RULE_alterRole = 53;
	public static readonly RULE_roleWith = 54;
	public static readonly RULE_roleWithOptions = 55;
	public static readonly RULE_alterMaterializedView = 56;
	public static readonly RULE_dropUser = 57;
	public static readonly RULE_dropType = 58;
	public static readonly RULE_dropMaterializedView = 59;
	public static readonly RULE_dropAggregate = 60;
	public static readonly RULE_dropFunction = 61;
	public static readonly RULE_dropTrigger = 62;
	public static readonly RULE_dropRole = 63;
	public static readonly RULE_dropTable = 64;
	public static readonly RULE_dropKeyspace = 65;
	public static readonly RULE_dropIndex = 66;
	public static readonly RULE_createTable = 67;
	public static readonly RULE_withElement = 68;
	public static readonly RULE_clusteringOrder = 69;
	public static readonly RULE_tableOptions = 70;
	public static readonly RULE_tableOptionItem = 71;
	public static readonly RULE_tableOptionName = 72;
	public static readonly RULE_tableOptionValue = 73;
	public static readonly RULE_optionHash = 74;
	public static readonly RULE_optionHashItem = 75;
	public static readonly RULE_optionHashKey = 76;
	public static readonly RULE_optionHashValue = 77;
	public static readonly RULE_columnDefinitionList = 78;
	public static readonly RULE_columnDefinition = 79;
	public static readonly RULE_primaryKeyColumn = 80;
	public static readonly RULE_primaryKeyElement = 81;
	public static readonly RULE_primaryKeyDefinition = 82;
	public static readonly RULE_singlePrimaryKey = 83;
	public static readonly RULE_compoundKey = 84;
	public static readonly RULE_compositeKey = 85;
	public static readonly RULE_partitionKeyList = 86;
	public static readonly RULE_clusteringKeyList = 87;
	public static readonly RULE_partitionKey = 88;
	public static readonly RULE_clusteringKey = 89;
	public static readonly RULE_applyBatch = 90;
	public static readonly RULE_beginBatch = 91;
	public static readonly RULE_batchType = 92;
	public static readonly RULE_alterKeyspace = 93;
	public static readonly RULE_replicationList = 94;
	public static readonly RULE_replicationListItem = 95;
	public static readonly RULE_durableWrites = 96;
	public static readonly RULE_use = 97;
	public static readonly RULE_truncate = 98;
	public static readonly RULE_createIndex = 99;
	public static readonly RULE_indexName = 100;
	public static readonly RULE_indexColumnSpec = 101;
	public static readonly RULE_indexKeysSpec = 102;
	public static readonly RULE_indexEntriesSSpec = 103;
	public static readonly RULE_indexFullSpec = 104;
	public static readonly RULE_delete = 105;
	public static readonly RULE_deleteColumnList = 106;
	public static readonly RULE_deleteColumnItem = 107;
	public static readonly RULE_update = 108;
	public static readonly RULE_ifSpec = 109;
	public static readonly RULE_ifConditionList = 110;
	public static readonly RULE_ifCondition = 111;
	public static readonly RULE_assignments = 112;
	public static readonly RULE_assignmentElement = 113;
	public static readonly RULE_assignmentSet = 114;
	public static readonly RULE_assignmentMap = 115;
	public static readonly RULE_assignmentList = 116;
	public static readonly RULE_insert = 117;
	public static readonly RULE_usingTtlTimestamp = 118;
	public static readonly RULE_timestamp = 119;
	public static readonly RULE_ttl = 120;
	public static readonly RULE_usingTimestampSpec = 121;
	public static readonly RULE_ifNotExist = 122;
	public static readonly RULE_ifExist = 123;
	public static readonly RULE_insertValuesSpec = 124;
	public static readonly RULE_insertColumnSpec = 125;
	public static readonly RULE_columnList = 126;
	public static readonly RULE_expressionList = 127;
	public static readonly RULE_select = 128;
	public static readonly RULE_limitSpec = 129;
	public static readonly RULE_fromSpec = 130;
	public static readonly RULE_fromSpecElement = 131;
	public static readonly RULE_orderSpec = 132;
	public static readonly RULE_orderSpecElement = 133;
	public static readonly RULE_whereSpec = 134;
	public static readonly RULE_selectElements = 135;
	public static readonly RULE_selectElement = 136;
	public static readonly RULE_relationElements = 137;
	public static readonly RULE_relationElement = 138;
	public static readonly RULE_relalationContains = 139;
	public static readonly RULE_relalationContainsKey = 140;
	public static readonly RULE_functionCall = 141;
	public static readonly RULE_functionArgs = 142;
	public static readonly RULE_constant = 143;
	public static readonly RULE_literalUuid = 144;
	public static readonly RULE_literalDecimal = 145;
	public static readonly RULE_literalFloat = 146;
	public static readonly RULE_literalString = 147;
	public static readonly RULE_literalBoolean = 148;
	public static readonly RULE_literalHexadecimal = 149;
	public static readonly RULE_keyspace = 150;
	public static readonly RULE_table = 151;
	public static readonly RULE_column = 152;
	public static readonly RULE_dataType = 153;
	public static readonly RULE_orderDirection = 154;
	public static readonly RULE_role = 155;
	public static readonly RULE_trigger = 156;
	public static readonly RULE_triggerClass = 157;
	public static readonly RULE_materializedView = 158;
	public static readonly RULE_type = 159;
	public static readonly RULE_aggregate = 160;
	public static readonly RULE_function = 161;
	public static readonly RULE_language = 162;
	public static readonly RULE_user = 163;
	public static readonly RULE_password = 164;
	public static readonly RULE_hashKey = 165;
	public static readonly RULE_param = 166;
	public static readonly RULE_paramName = 167;
	public static readonly RULE_kwAdd = 168;
	public static readonly RULE_kwAggregate = 169;
	public static readonly RULE_kwAll = 170;
	public static readonly RULE_kwAllPermissions = 171;
	public static readonly RULE_kwAllow = 172;
	public static readonly RULE_kwAllowFiltering = 173;
	public static readonly RULE_kwAlter = 174;
	public static readonly RULE_kwAnd = 175;
	public static readonly RULE_kwApply = 176;
	public static readonly RULE_kwAs = 177;
	public static readonly RULE_kwAsc = 178;
	public static readonly RULE_kwAuthorize = 179;
	public static readonly RULE_kwBatch = 180;
	public static readonly RULE_kwBegin = 181;
	public static readonly RULE_kwBy = 182;
	public static readonly RULE_kwCalled = 183;
	public static readonly RULE_kwClustering = 184;
	public static readonly RULE_kwCompact = 185;
	public static readonly RULE_kwContains = 186;
	public static readonly RULE_kwContainsKey = 187;
	public static readonly RULE_kwCreate = 188;
	public static readonly RULE_kwDelete = 189;
	public static readonly RULE_kwDesc = 190;
	public static readonly RULE_kwDescibe = 191;
	public static readonly RULE_kwDistinct = 192;
	public static readonly RULE_kwDrop = 193;
	public static readonly RULE_kwDurableWrites = 194;
	public static readonly RULE_kwEntries = 195;
	public static readonly RULE_kwExecute = 196;
	public static readonly RULE_kwExists = 197;
	public static readonly RULE_kwFiltering = 198;
	public static readonly RULE_kwFinalfunc = 199;
	public static readonly RULE_kwFrom = 200;
	public static readonly RULE_kwFull = 201;
	public static readonly RULE_kwFunction = 202;
	public static readonly RULE_kwFunctions = 203;
	public static readonly RULE_kwGrant = 204;
	public static readonly RULE_kwIf = 205;
	public static readonly RULE_kwIn = 206;
	public static readonly RULE_kwIndex = 207;
	public static readonly RULE_kwInitcond = 208;
	public static readonly RULE_kwInput = 209;
	public static readonly RULE_kwInsert = 210;
	public static readonly RULE_kwInto = 211;
	public static readonly RULE_kwIs = 212;
	public static readonly RULE_kwKey = 213;
	public static readonly RULE_kwKeys = 214;
	public static readonly RULE_kwKeyspace = 215;
	public static readonly RULE_kwKeyspaces = 216;
	public static readonly RULE_kwLanguage = 217;
	public static readonly RULE_kwLimit = 218;
	public static readonly RULE_kwList = 219;
	public static readonly RULE_kwLogged = 220;
	public static readonly RULE_kwLogin = 221;
	public static readonly RULE_kwMaterialized = 222;
	public static readonly RULE_kwModify = 223;
	public static readonly RULE_kwNosuperuser = 224;
	public static readonly RULE_kwNorecursive = 225;
	public static readonly RULE_kwNot = 226;
	public static readonly RULE_kwNull = 227;
	public static readonly RULE_kwOf = 228;
	public static readonly RULE_kwOn = 229;
	public static readonly RULE_kwOptions = 230;
	public static readonly RULE_kwOr = 231;
	public static readonly RULE_kwOrder = 232;
	public static readonly RULE_kwOrderBy = 233;
	public static readonly RULE_kwPassword = 234;
	public static readonly RULE_kwPrimary = 235;
	public static readonly RULE_kwRename = 236;
	public static readonly RULE_kwReplace = 237;
	public static readonly RULE_kwReplication = 238;
	public static readonly RULE_kwReturns = 239;
	public static readonly RULE_kwRole = 240;
	public static readonly RULE_kwRoles = 241;
	public static readonly RULE_kwSelect = 242;
	public static readonly RULE_kwSet = 243;
	public static readonly RULE_kwSfunc = 244;
	public static readonly RULE_kwStatic = 245;
	public static readonly RULE_kwStorage = 246;
	public static readonly RULE_kwStype = 247;
	public static readonly RULE_kwSuperuser = 248;
	public static readonly RULE_kwTable = 249;
	public static readonly RULE_kwTimestamp = 250;
	public static readonly RULE_kwTo = 251;
	public static readonly RULE_kwTrigger = 252;
	public static readonly RULE_kwTruncate = 253;
	public static readonly RULE_kwTtl = 254;
	public static readonly RULE_kwType = 255;
	public static readonly RULE_kwUnlogged = 256;
	public static readonly RULE_kwUpdate = 257;
	public static readonly RULE_kwUse = 258;
	public static readonly RULE_kwUser = 259;
	public static readonly RULE_kwUsers = 260;
	public static readonly RULE_kwUsing = 261;
	public static readonly RULE_kwValues = 262;
	public static readonly RULE_kwView = 263;
	public static readonly RULE_kwWhere = 264;
	public static readonly RULE_kwWith = 265;
	public static readonly RULE_kwRevoke = 266;
	public static readonly RULE_dataTypeAscii = 267;
	public static readonly RULE_dataTypeBigint = 268;
	public static readonly RULE_dataTypeBlob = 269;
	public static readonly RULE_dataTypeBoolean = 270;
	public static readonly RULE_dataTypeCounter = 271;
	public static readonly RULE_dataTypeDate = 272;
	public static readonly RULE_dataTypeDecimal = 273;
	public static readonly RULE_dataTypeDouble = 274;
	public static readonly RULE_dataTypeFloat = 275;
	public static readonly RULE_dataTypeFrozen = 276;
	public static readonly RULE_dataTypeInet = 277;
	public static readonly RULE_dataTypeInt = 278;
	public static readonly RULE_dataTypeList = 279;
	public static readonly RULE_dataTypeMap = 280;
	public static readonly RULE_dataTypeSmallInt = 281;
	public static readonly RULE_dataTypeSet = 282;
	public static readonly RULE_dataTypeText = 283;
	public static readonly RULE_dataTypeTime = 284;
	public static readonly RULE_dataTypeTimeUuid = 285;
	public static readonly RULE_dataTypeTimestamp = 286;
	public static readonly RULE_dataTypeTinyInt = 287;
	public static readonly RULE_dataTypeTuple = 288;
	public static readonly RULE_dataTypeUserDefined = 289;
	public static readonly RULE_dataTypeUuid = 290;
	public static readonly RULE_dataTypeVarChar = 291;
	public static readonly RULE_dataTypeVarInt = 292;
	public static readonly RULE_dataTypeTupleSpec = 293;
	public static readonly RULE_dataTypeMapSpec = 294;
	public static readonly RULE_dataTypeListSpec = 295;
	public static readonly RULE_dataTypeSetSpec = 296;
	public static readonly RULE_dataTypeFrozenSpec = 297;
	public static readonly RULE_specialStar = 298;
	public static readonly RULE_specialDot = 299;
	public static readonly RULE_eof = 300;
	public static readonly RULE_syntaxBracketLr = 301;
	public static readonly RULE_syntaxBracketRr = 302;
	public static readonly RULE_syntaxBracketLc = 303;
	public static readonly RULE_syntaxBracketRc = 304;
	public static readonly RULE_syntaxBracketLa = 305;
	public static readonly RULE_syntaxBracketRa = 306;
	public static readonly RULE_syntaxBracketLs = 307;
	public static readonly RULE_syntaxBracketRs = 308;
	public static readonly RULE_syntaxComma = 309;
	public static readonly RULE_syntaxColon = 310;
	public static readonly RULE_syntaxSquote = 311;
	public static readonly RULE_syntaxDquote = 312;
	public static readonly RULE_syntaxOperatorEq = 313;
	public static readonly RULE_syntaxOperatorLt = 314;
	public static readonly RULE_syntaxOperatorGt = 315;
	public static readonly RULE_syntaxOperatorLte = 316;
	public static readonly RULE_syntaxOperatorGte = 317;
	public static readonly ruleNames: string[] = [
		"root", "cqls", "statementSeparator", "empty", "cql", "revoke", "listUsers", 
		"listRoles", "listPermissions", "grant", "priviledge", "resource", "createUser", 
		"createRole", "createType", "typeMemberColumnList", "createTrigger", "createMaterializedView", 
		"materializedViewWhere", "columnNotNullList", "columnNotNull", "materializedViewOptions", 
		"createKeyspace", "createFunction", "codeBlock", "paramList", "returnMode", 
		"createAggregate", "initCondDefinition", "initCondHash", "initCondHashItem", 
		"initCondListNested", "initCondList", "orReplace", "alterUser", "userPassword", 
		"userSuperUser", "alterType", "alterTypeOperation", "alterTypeRename", 
		"alterTypeRenameList", "alterTypeRenameItem", "alterTypeAdd", "alterTypeAlterType", 
		"alterTable", "alterTableOperation", "alterTableWith", "alterTableRename", 
		"alterTableDropCompactStorage", "alterTableDropColumns", "alterTableDropColumnList", 
		"alterTableAdd", "alterTableColumnDefinition", "alterRole", "roleWith", 
		"roleWithOptions", "alterMaterializedView", "dropUser", "dropType", "dropMaterializedView", 
		"dropAggregate", "dropFunction", "dropTrigger", "dropRole", "dropTable", 
		"dropKeyspace", "dropIndex", "createTable", "withElement", "clusteringOrder", 
		"tableOptions", "tableOptionItem", "tableOptionName", "tableOptionValue", 
		"optionHash", "optionHashItem", "optionHashKey", "optionHashValue", "columnDefinitionList", 
		"columnDefinition", "primaryKeyColumn", "primaryKeyElement", "primaryKeyDefinition", 
		"singlePrimaryKey", "compoundKey", "compositeKey", "partitionKeyList", 
		"clusteringKeyList", "partitionKey", "clusteringKey", "applyBatch", "beginBatch", 
		"batchType", "alterKeyspace", "replicationList", "replicationListItem", 
		"durableWrites", "use", "truncate", "createIndex", "indexName", "indexColumnSpec", 
		"indexKeysSpec", "indexEntriesSSpec", "indexFullSpec", "delete", "deleteColumnList", 
		"deleteColumnItem", "update", "ifSpec", "ifConditionList", "ifCondition", 
		"assignments", "assignmentElement", "assignmentSet", "assignmentMap", 
		"assignmentList", "insert", "usingTtlTimestamp", "timestamp", "ttl", "usingTimestampSpec", 
		"ifNotExist", "ifExist", "insertValuesSpec", "insertColumnSpec", "columnList", 
		"expressionList", "select", "limitSpec", "fromSpec", "fromSpecElement", 
		"orderSpec", "orderSpecElement", "whereSpec", "selectElements", "selectElement", 
		"relationElements", "relationElement", "relalationContains", "relalationContainsKey", 
		"functionCall", "functionArgs", "constant", "literalUuid", "literalDecimal", 
		"literalFloat", "literalString", "literalBoolean", "literalHexadecimal", 
		"keyspace", "table", "column", "dataType", "orderDirection", "role", "trigger", 
		"triggerClass", "materializedView", "type", "aggregate", "function", "language", 
		"user", "password", "hashKey", "param", "paramName", "kwAdd", "kwAggregate", 
		"kwAll", "kwAllPermissions", "kwAllow", "kwAllowFiltering", "kwAlter", 
		"kwAnd", "kwApply", "kwAs", "kwAsc", "kwAuthorize", "kwBatch", "kwBegin", 
		"kwBy", "kwCalled", "kwClustering", "kwCompact", "kwContains", "kwContainsKey", 
		"kwCreate", "kwDelete", "kwDesc", "kwDescibe", "kwDistinct", "kwDrop", 
		"kwDurableWrites", "kwEntries", "kwExecute", "kwExists", "kwFiltering", 
		"kwFinalfunc", "kwFrom", "kwFull", "kwFunction", "kwFunctions", "kwGrant", 
		"kwIf", "kwIn", "kwIndex", "kwInitcond", "kwInput", "kwInsert", "kwInto", 
		"kwIs", "kwKey", "kwKeys", "kwKeyspace", "kwKeyspaces", "kwLanguage", 
		"kwLimit", "kwList", "kwLogged", "kwLogin", "kwMaterialized", "kwModify", 
		"kwNosuperuser", "kwNorecursive", "kwNot", "kwNull", "kwOf", "kwOn", "kwOptions", 
		"kwOr", "kwOrder", "kwOrderBy", "kwPassword", "kwPrimary", "kwRename", 
		"kwReplace", "kwReplication", "kwReturns", "kwRole", "kwRoles", "kwSelect", 
		"kwSet", "kwSfunc", "kwStatic", "kwStorage", "kwStype", "kwSuperuser", 
		"kwTable", "kwTimestamp", "kwTo", "kwTrigger", "kwTruncate", "kwTtl", 
		"kwType", "kwUnlogged", "kwUpdate", "kwUse", "kwUser", "kwUsers", "kwUsing", 
		"kwValues", "kwView", "kwWhere", "kwWith", "kwRevoke", "dataTypeAscii", 
		"dataTypeBigint", "dataTypeBlob", "dataTypeBoolean", "dataTypeCounter", 
		"dataTypeDate", "dataTypeDecimal", "dataTypeDouble", "dataTypeFloat", 
		"dataTypeFrozen", "dataTypeInet", "dataTypeInt", "dataTypeList", "dataTypeMap", 
		"dataTypeSmallInt", "dataTypeSet", "dataTypeText", "dataTypeTime", "dataTypeTimeUuid", 
		"dataTypeTimestamp", "dataTypeTinyInt", "dataTypeTuple", "dataTypeUserDefined", 
		"dataTypeUuid", "dataTypeVarChar", "dataTypeVarInt", "dataTypeTupleSpec", 
		"dataTypeMapSpec", "dataTypeListSpec", "dataTypeSetSpec", "dataTypeFrozenSpec", 
		"specialStar", "specialDot", "eof", "syntaxBracketLr", "syntaxBracketRr", 
		"syntaxBracketLc", "syntaxBracketRc", "syntaxBracketLa", "syntaxBracketRa", 
		"syntaxBracketLs", "syntaxBracketRs", "syntaxComma", "syntaxColon", "syntaxSquote", 
		"syntaxDquote", "syntaxOperatorEq", "syntaxOperatorLt", "syntaxOperatorGt", 
		"syntaxOperatorLte", "syntaxOperatorGte"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'('", "')'", "'{'", "'}'", "'['", "']'", "','", "';'", "':'", 
		"'\"'", "'''", undefined, undefined, undefined, undefined, "'.'", "'*'", 
		"'/'", "'%'", "'+'", "'--'", "'-'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, "LR_BRACKET", "RR_BRACKET", "LC_BRACKET", "RC_BRACKET", "LS_BRACKET", 
		"RS_BRACKET", "COMMA", "SEMI", "COLON", "DQUOTE", "SQUOTE", "SPACE", "SPEC_MYSQL_COMMENT", 
		"COMMENT_INPUT", "LINE_COMMENT", "DOT", "STAR", "DIVIDE", "MODULE", "PLUS", 
		"MINUSMINUS", "MINUS", "K_ADD", "K_AGGREGATE", "K_ALL", "K_ALLOW", "K_ALTER", 
		"K_AND", "K_ANY", "K_APPLY", "K_AS", "K_ASC", "K_AUTHORIZE", "K_BATCH", 
		"K_BEGIN", "K_BY", "K_CALLED", "K_CLUSTERING", "K_COLUMNFAMILY", "K_COMPACT", 
		"K_CONSISTENCY", "K_CONTAINS", "K_CREATE", "K_CUSTOM", "K_DELETE", "K_DESC", 
		"K_DESCRIBE", "K_DISTINCT", "K_DROP", "K_DURABLE_WRITES", "K_EACH_QUORUM", 
		"K_ENTRIES", "K_EXECUTE", "K_EXISTS", "K_FALSE", "K_FILTERING", "K_FINALFUNC", 
		"K_FROM", "K_FULL", "K_FUNCTION", "K_FUNCTIONS", "K_GRANT", "K_IF", "K_IN", 
		"K_INDEX", "K_INFINITY", "K_INITCOND", "K_INPUT", "K_INSERT", "K_INTO", 
		"K_IS", "K_KEY", "K_KEYS", "K_KEYSPACE", "K_KEYSPACES", "K_LANGUAGE", 
		"K_LEVEL", "K_LIMIT", "K_LOCAL_ONE", "K_LOCAL_QUORUM", "K_LOGGED", "K_LOGIN", 
		"K_MATERIALIZED", "K_MODIFY", "K_NAN", "K_NORECURSIVE", "K_NOSUPERUSER", 
		"K_NOT", "K_NULL", "K_OF", "K_ON", "K_ONE", "K_OPTIONS", "K_OR", "K_ORDER", 
		"K_PARTITION", "K_PASSWORD", "K_PER", "K_PERMISSION", "K_PERMISSIONS", 
		"K_PRIMARY", "K_QUORUM", "K_RENAME", "K_REPLACE", "K_REPLICATION", "K_RETURNS", 
		"K_REVOKE", "K_ROLE", "K_ROLES", "K_SCHEMA", "K_SELECT", "K_SET", "K_SFUNC", 
		"K_STATIC", "K_STORAGE", "K_STYPE", "K_SUPERUSER", "K_TABLE", "K_THREE", 
		"K_TIMESTAMP", "K_TO", "K_TOKEN", "K_TRIGGER", "K_TRUE", "K_TRUNCATE", 
		"K_TTL", "K_TWO", "K_TYPE", "K_UNLOGGED", "K_UPDATE", "K_USE", "K_USER", 
		"K_USING", "K_UUID", "K_VALUES", "K_VIEW", "K_WHERE", "K_WITH", "K_WRITETIME", 
		"K_ASCII", "K_BIGINT", "K_BLOB", "K_BOOLEAN", "K_COUNTER", "K_DATE", "K_DECIMAL", 
		"K_DOUBLE", "K_FLOAT", "K_FROZEN", "K_INET", "K_INT", "K_LIST", "K_MAP", 
		"K_SMALLINT", "K_TEXT", "K_TIMEUUID", "K_TIME", "K_TINYINT", "K_TUPLE", 
		"K_VARCHAR", "K_VARINT", "K_USERS", "CODE_BLOCK", "STRING_LITERAL", "DECIMAL_LITERAL", 
		"FLOAT_LITERAL", "HEXADECIMAL_LITERAL", "REAL_LITERAL", "OBJECT_NAME", 
		"UUID", "OPERATOR_EQ", "OPERATOR_LT", "OPERATOR_GT", "OPERATOR_LTE", "OPERATOR_GTE"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CqlParser._LITERAL_NAMES, CqlParser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return CqlParser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "CqlParser.g4"; }

	@Override
	public get ruleNames(): string[] { return CqlParser.ruleNames; }

	@Override
	public get serializedATN(): string { return CqlParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CqlParser._ATN, this);
	}
	@RuleVersion(0)
	public root(): RootContext {
		let _localctx: RootContext = new RootContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CqlParser.RULE_root);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 637;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & ((1 << (CqlParser.SEMI - 8)) | (1 << (CqlParser.K_ALTER - 8)) | (1 << (CqlParser.K_APPLY - 8)) | (1 << (CqlParser.K_BEGIN - 8)))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (CqlParser.K_CREATE - 43)) | (1 << (CqlParser.K_DELETE - 43)) | (1 << (CqlParser.K_DROP - 43)) | (1 << (CqlParser.K_GRANT - 43)) | (1 << (CqlParser.K_INSERT - 43)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (CqlParser.K_REVOKE - 107)) | (1 << (CqlParser.K_SELECT - 107)) | (1 << (CqlParser.K_TRUNCATE - 107)) | (1 << (CqlParser.K_UPDATE - 107)) | (1 << (CqlParser.K_USE - 107)))) !== 0) || _la===CqlParser.K_LIST) {
				{
				this.state = 636;
				this.cqls();
				}
			}

			this.state = 640;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.MINUSMINUS) {
				{
				this.state = 639;
				this.match(CqlParser.MINUSMINUS);
				}
			}

			this.state = 642;
			this.eof();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public cqls(): CqlsContext {
		let _localctx: CqlsContext = new CqlsContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CqlParser.RULE_cqls);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 653;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,4,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					this.state = 651;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case CqlParser.K_ALTER:
					case CqlParser.K_APPLY:
					case CqlParser.K_BEGIN:
					case CqlParser.K_CREATE:
					case CqlParser.K_DELETE:
					case CqlParser.K_DROP:
					case CqlParser.K_GRANT:
					case CqlParser.K_INSERT:
					case CqlParser.K_REVOKE:
					case CqlParser.K_SELECT:
					case CqlParser.K_TRUNCATE:
					case CqlParser.K_UPDATE:
					case CqlParser.K_USE:
					case CqlParser.K_LIST:
						{
						this.state = 644;
						this.cql();
						this.state = 646;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===CqlParser.MINUSMINUS) {
							{
							this.state = 645;
							this.match(CqlParser.MINUSMINUS);
							}
						}

						this.state = 648;
						this.statementSeparator();
						}
						break;
					case CqlParser.SEMI:
						{
						this.state = 650;
						this.empty();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					} 
				}
				this.state = 655;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,4,this._ctx);
			}
			this.state = 664;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_ALTER:
			case CqlParser.K_APPLY:
			case CqlParser.K_BEGIN:
			case CqlParser.K_CREATE:
			case CqlParser.K_DELETE:
			case CqlParser.K_DROP:
			case CqlParser.K_GRANT:
			case CqlParser.K_INSERT:
			case CqlParser.K_REVOKE:
			case CqlParser.K_SELECT:
			case CqlParser.K_TRUNCATE:
			case CqlParser.K_UPDATE:
			case CqlParser.K_USE:
			case CqlParser.K_LIST:
				{
				this.state = 656;
				this.cql();
				this.state = 661;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,6,this._ctx) ) {
				case 1:
					{
					this.state = 658;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===CqlParser.MINUSMINUS) {
						{
						this.state = 657;
						this.match(CqlParser.MINUSMINUS);
						}
					}

					this.state = 660;
					this.statementSeparator();
					}
					break;
				}
				}
				break;
			case CqlParser.SEMI:
				{
				this.state = 663;
				this.empty();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public statementSeparator(): StatementSeparatorContext {
		let _localctx: StatementSeparatorContext = new StatementSeparatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CqlParser.RULE_statementSeparator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 666;
			this.match(CqlParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public empty(): EmptyContext {
		let _localctx: EmptyContext = new EmptyContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CqlParser.RULE_empty);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 668;
			this.statementSeparator();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public cql(): CqlContext {
		let _localctx: CqlContext = new CqlContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CqlParser.RULE_cql);
		try {
			this.state = 707;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,8,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 670;
				this.alterKeyspace();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 671;
				this.alterMaterializedView();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 672;
				this.alterRole();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 673;
				this.alterTable();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 674;
				this.alterType();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 675;
				this.alterUser();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 676;
				this.applyBatch();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 677;
				this.createAggregate();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 678;
				this.createFunction();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 679;
				this.createIndex();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 680;
				this.createKeyspace();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 681;
				this.createMaterializedView();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 682;
				this.createRole();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 683;
				this.createTable();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 684;
				this.createTrigger();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 685;
				this.createType();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 686;
				this.createUser();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 687;
				this.delete();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 688;
				this.dropAggregate();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 689;
				this.dropFunction();
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 690;
				this.dropIndex();
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 691;
				this.dropKeyspace();
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 692;
				this.dropMaterializedView();
				}
				break;

			case 24:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 693;
				this.dropRole();
				}
				break;

			case 25:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 694;
				this.dropTable();
				}
				break;

			case 26:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 695;
				this.dropTrigger();
				}
				break;

			case 27:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 696;
				this.dropType();
				}
				break;

			case 28:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 697;
				this.dropUser();
				}
				break;

			case 29:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 698;
				this.grant();
				}
				break;

			case 30:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 699;
				this.insert();
				}
				break;

			case 31:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 700;
				this.listPermissions();
				}
				break;

			case 32:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 701;
				this.listRoles();
				}
				break;

			case 33:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 702;
				this.revoke();
				}
				break;

			case 34:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 703;
				this.select();
				}
				break;

			case 35:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 704;
				this.truncate();
				}
				break;

			case 36:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 705;
				this.update();
				}
				break;

			case 37:
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 706;
				this.use();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public revoke(): RevokeContext {
		let _localctx: RevokeContext = new RevokeContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CqlParser.RULE_revoke);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 709;
			this.kwRevoke();
			this.state = 710;
			this.priviledge();
			this.state = 711;
			this.kwOn();
			this.state = 712;
			this.resource();
			this.state = 713;
			this.kwFrom();
			this.state = 714;
			this.role();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public listUsers(): ListUsersContext {
		let _localctx: ListUsersContext = new ListUsersContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CqlParser.RULE_listUsers);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 716;
			this.kwList();
			this.state = 717;
			this.kwUsers();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public listRoles(): ListRolesContext {
		let _localctx: ListRolesContext = new ListRolesContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CqlParser.RULE_listRoles);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 719;
			this.kwList();
			this.state = 720;
			this.kwRoles();
			this.state = 724;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_OF) {
				{
				this.state = 721;
				this.kwOf();
				this.state = 722;
				this.role();
				}
			}

			this.state = 727;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_NORECURSIVE) {
				{
				this.state = 726;
				this.kwNorecursive();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public listPermissions(): ListPermissionsContext {
		let _localctx: ListPermissionsContext = new ListPermissionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CqlParser.RULE_listPermissions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 729;
			this.kwList();
			this.state = 730;
			this.priviledge();
			this.state = 734;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_ON) {
				{
				this.state = 731;
				this.kwOn();
				this.state = 732;
				this.resource();
				}
			}

			this.state = 739;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_OF) {
				{
				this.state = 736;
				this.kwOf();
				this.state = 737;
				this.role();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public grant(): GrantContext {
		let _localctx: GrantContext = new GrantContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CqlParser.RULE_grant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 741;
			this.kwGrant();
			this.state = 742;
			this.priviledge();
			this.state = 743;
			this.kwOn();
			this.state = 744;
			this.resource();
			this.state = 745;
			this.kwTo();
			this.state = 746;
			this.role();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public priviledge(): PriviledgeContext {
		let _localctx: PriviledgeContext = new PriviledgeContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, CqlParser.RULE_priviledge);
		try {
			this.state = 760;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_ALL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 750;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,13,this._ctx) ) {
				case 1:
					{
					this.state = 748;
					this.kwAll();
					}
					break;

				case 2:
					{
					this.state = 749;
					this.kwAllPermissions();
					}
					break;
				}
				}
				break;
			case CqlParser.K_ALTER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 752;
				this.kwAlter();
				}
				break;
			case CqlParser.K_AUTHORIZE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 753;
				this.kwAuthorize();
				}
				break;
			case CqlParser.K_DESCRIBE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 754;
				this.kwDescibe();
				}
				break;
			case CqlParser.K_EXECUTE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 755;
				this.kwExecute();
				}
				break;
			case CqlParser.K_CREATE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 756;
				this.kwCreate();
				}
				break;
			case CqlParser.K_DROP:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 757;
				this.kwDrop();
				}
				break;
			case CqlParser.K_MODIFY:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 758;
				this.kwModify();
				}
				break;
			case CqlParser.K_SELECT:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 759;
				this.kwSelect();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public resource(): ResourceContext {
		let _localctx: ResourceContext = new ResourceContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CqlParser.RULE_resource);
		let _la: number;
		try {
			this.state = 800;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,18,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 762;
				this.kwAll();
				this.state = 763;
				this.kwFunctions();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 765;
				this.kwAll();
				this.state = 766;
				this.kwFunctions();
				this.state = 767;
				this.kwIn();
				this.state = 768;
				this.kwKeyspace();
				this.state = 769;
				this.keyspace();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 771;
				this.kwFunction();
				this.state = 775;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,15,this._ctx) ) {
				case 1:
					{
					this.state = 772;
					this.keyspace();
					this.state = 773;
					this.match(CqlParser.DOT);
					}
					break;
				}
				this.state = 777;
				this.function();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 779;
				this.kwAll();
				this.state = 780;
				this.kwKeyspaces();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 782;
				this.kwKeyspace();
				this.state = 783;
				this.keyspace();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 786;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CqlParser.K_TABLE) {
					{
					this.state = 785;
					this.kwTable();
					}
				}

				this.state = 791;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,17,this._ctx) ) {
				case 1:
					{
					this.state = 788;
					this.keyspace();
					this.state = 789;
					this.match(CqlParser.DOT);
					}
					break;
				}
				this.state = 793;
				this.table();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 794;
				this.kwAll();
				this.state = 795;
				this.kwRoles();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 797;
				this.kwRole();
				this.state = 798;
				this.role();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public createUser(): CreateUserContext {
		let _localctx: CreateUserContext = new CreateUserContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, CqlParser.RULE_createUser);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 802;
			this.kwCreate();
			this.state = 803;
			this.kwUser();
			this.state = 805;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 804;
				this.ifNotExist();
				}
			}

			this.state = 807;
			this.user();
			this.state = 808;
			this.kwWith();
			this.state = 809;
			this.kwPassword();
			this.state = 810;
			this.literalString();
			this.state = 813;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_SUPERUSER:
				{
				this.state = 811;
				this.kwSuperuser();
				}
				break;
			case CqlParser.K_NOSUPERUSER:
				{
				this.state = 812;
				this.kwNosuperuser();
				}
				break;
			case CqlParser.EOF:
			case CqlParser.SEMI:
			case CqlParser.MINUSMINUS:
				break;
			default:
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public createRole(): CreateRoleContext {
		let _localctx: CreateRoleContext = new CreateRoleContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, CqlParser.RULE_createRole);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 815;
			this.kwCreate();
			this.state = 816;
			this.kwRole();
			this.state = 818;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 817;
				this.ifNotExist();
				}
			}

			this.state = 820;
			this.role();
			this.state = 822;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_WITH) {
				{
				this.state = 821;
				this.roleWith();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public createType(): CreateTypeContext {
		let _localctx: CreateTypeContext = new CreateTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CqlParser.RULE_createType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 824;
			this.kwCreate();
			this.state = 825;
			this.kwType();
			this.state = 827;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 826;
				this.ifNotExist();
				}
			}

			this.state = 832;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,24,this._ctx) ) {
			case 1:
				{
				this.state = 829;
				this.keyspace();
				this.state = 830;
				this.match(CqlParser.DOT);
				}
				break;
			}
			this.state = 834;
			this.type();
			this.state = 835;
			this.syntaxBracketLr();
			this.state = 836;
			this.typeMemberColumnList();
			this.state = 837;
			this.syntaxBracketRr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typeMemberColumnList(): TypeMemberColumnListContext {
		let _localctx: TypeMemberColumnListContext = new TypeMemberColumnListContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, CqlParser.RULE_typeMemberColumnList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 839;
			this.column();
			this.state = 840;
			this.dataType();
			this.state = 847;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 841;
				this.syntaxComma();
				this.state = 842;
				this.column();
				this.state = 843;
				this.dataType();
				}
				}
				this.state = 849;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public createTrigger(): CreateTriggerContext {
		let _localctx: CreateTriggerContext = new CreateTriggerContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CqlParser.RULE_createTrigger);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 850;
			this.kwCreate();
			this.state = 851;
			this.kwTrigger();
			this.state = 853;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 852;
				this.ifNotExist();
				}
			}

			this.state = 858;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,27,this._ctx) ) {
			case 1:
				{
				this.state = 855;
				this.keyspace();
				this.state = 856;
				this.match(CqlParser.DOT);
				}
				break;
			}
			this.state = 860;
			this.trigger();
			this.state = 861;
			this.kwUsing();
			this.state = 862;
			this.triggerClass();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public createMaterializedView(): CreateMaterializedViewContext {
		let _localctx: CreateMaterializedViewContext = new CreateMaterializedViewContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, CqlParser.RULE_createMaterializedView);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 864;
			this.kwCreate();
			this.state = 865;
			this.kwMaterialized();
			this.state = 866;
			this.kwView();
			this.state = 868;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 867;
				this.ifNotExist();
				}
			}

			this.state = 873;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,29,this._ctx) ) {
			case 1:
				{
				this.state = 870;
				this.keyspace();
				this.state = 871;
				this.match(CqlParser.DOT);
				}
				break;
			}
			this.state = 875;
			this.materializedView();
			this.state = 876;
			this.kwAs();
			this.state = 877;
			this.kwSelect();
			this.state = 878;
			this.columnList();
			this.state = 879;
			this.kwFrom();
			this.state = 883;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,30,this._ctx) ) {
			case 1:
				{
				this.state = 880;
				this.keyspace();
				this.state = 881;
				this.match(CqlParser.DOT);
				}
				break;
			}
			this.state = 885;
			this.table();
			this.state = 886;
			this.materializedViewWhere();
			this.state = 887;
			this.kwPrimary();
			this.state = 888;
			this.kwKey();
			this.state = 889;
			this.syntaxBracketLr();
			this.state = 890;
			this.columnList();
			this.state = 891;
			this.syntaxBracketRr();
			this.state = 895;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_WITH) {
				{
				this.state = 892;
				this.kwWith();
				this.state = 893;
				this.materializedViewOptions();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public materializedViewWhere(): MaterializedViewWhereContext {
		let _localctx: MaterializedViewWhereContext = new MaterializedViewWhereContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, CqlParser.RULE_materializedViewWhere);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 897;
			this.kwWhere();
			this.state = 898;
			this.columnNotNullList();
			this.state = 902;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_AND) {
				{
				this.state = 899;
				this.kwAnd();
				this.state = 900;
				this.relationElements();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public columnNotNullList(): ColumnNotNullListContext {
		let _localctx: ColumnNotNullListContext = new ColumnNotNullListContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, CqlParser.RULE_columnNotNullList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 904;
			this.columnNotNull();
			this.state = 910;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,33,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 905;
					this.kwAnd();
					this.state = 906;
					this.columnNotNull();
					}
					} 
				}
				this.state = 912;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,33,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public columnNotNull(): ColumnNotNullContext {
		let _localctx: ColumnNotNullContext = new ColumnNotNullContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, CqlParser.RULE_columnNotNull);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 913;
			this.column();
			this.state = 914;
			this.kwIs();
			this.state = 915;
			this.kwNot();
			this.state = 916;
			this.kwNull();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public materializedViewOptions(): MaterializedViewOptionsContext {
		let _localctx: MaterializedViewOptionsContext = new MaterializedViewOptionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, CqlParser.RULE_materializedViewOptions);
		try {
			this.state = 924;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,34,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 918;
				this.tableOptions();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 919;
				this.tableOptions();
				this.state = 920;
				this.kwAnd();
				this.state = 921;
				this.clusteringOrder();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 923;
				this.clusteringOrder();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public createKeyspace(): CreateKeyspaceContext {
		let _localctx: CreateKeyspaceContext = new CreateKeyspaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, CqlParser.RULE_createKeyspace);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 926;
			this.kwCreate();
			this.state = 927;
			this.kwKeyspace();
			this.state = 929;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 928;
				this.ifNotExist();
				}
			}

			this.state = 931;
			this.keyspace();
			this.state = 932;
			this.kwWith();
			this.state = 933;
			this.kwReplication();
			this.state = 934;
			this.match(CqlParser.OPERATOR_EQ);
			this.state = 935;
			this.syntaxBracketLc();
			this.state = 936;
			this.replicationList();
			this.state = 937;
			this.syntaxBracketRc();
			this.state = 941;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_AND) {
				{
				this.state = 938;
				this.kwAnd();
				this.state = 939;
				this.durableWrites();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public createFunction(): CreateFunctionContext {
		let _localctx: CreateFunctionContext = new CreateFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, CqlParser.RULE_createFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 943;
			this.kwCreate();
			this.state = 945;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_OR) {
				{
				this.state = 944;
				this.orReplace();
				}
			}

			this.state = 947;
			this.kwFunction();
			this.state = 949;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 948;
				this.ifNotExist();
				}
			}

			this.state = 954;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,39,this._ctx) ) {
			case 1:
				{
				this.state = 951;
				this.keyspace();
				this.state = 952;
				this.match(CqlParser.DOT);
				}
				break;
			}
			this.state = 956;
			this.function();
			this.state = 957;
			this.syntaxBracketLr();
			this.state = 959;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.OBJECT_NAME) {
				{
				this.state = 958;
				this.paramList();
				}
			}

			this.state = 961;
			this.syntaxBracketRr();
			this.state = 962;
			this.returnMode();
			this.state = 963;
			this.kwReturns();
			this.state = 964;
			this.dataType();
			this.state = 965;
			this.kwLanguage();
			this.state = 966;
			this.language();
			this.state = 967;
			this.kwAs();
			this.state = 968;
			this.codeBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public codeBlock(): CodeBlockContext {
		let _localctx: CodeBlockContext = new CodeBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, CqlParser.RULE_codeBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 970;
			this.match(CqlParser.CODE_BLOCK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public paramList(): ParamListContext {
		let _localctx: ParamListContext = new ParamListContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, CqlParser.RULE_paramList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 972;
			this.param();
			this.state = 978;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 973;
				this.syntaxComma();
				this.state = 974;
				this.param();
				}
				}
				this.state = 980;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public returnMode(): ReturnModeContext {
		let _localctx: ReturnModeContext = new ReturnModeContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, CqlParser.RULE_returnMode);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 985;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_CALLED:
				{
				this.state = 981;
				this.kwCalled();
				}
				break;
			case CqlParser.K_RETURNS:
				{
				this.state = 982;
				this.kwReturns();
				this.state = 983;
				this.kwNull();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 987;
			this.kwOn();
			this.state = 988;
			this.kwNull();
			this.state = 989;
			this.kwInput();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public createAggregate(): CreateAggregateContext {
		let _localctx: CreateAggregateContext = new CreateAggregateContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, CqlParser.RULE_createAggregate);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 991;
			this.kwCreate();
			this.state = 993;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_OR) {
				{
				this.state = 992;
				this.orReplace();
				}
			}

			this.state = 995;
			this.kwAggregate();
			this.state = 997;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 996;
				this.ifNotExist();
				}
			}

			this.state = 1002;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,45,this._ctx) ) {
			case 1:
				{
				this.state = 999;
				this.keyspace();
				this.state = 1000;
				this.match(CqlParser.DOT);
				}
				break;
			}
			this.state = 1004;
			this.aggregate();
			this.state = 1005;
			this.syntaxBracketLr();
			this.state = 1006;
			this.dataType();
			this.state = 1007;
			this.syntaxBracketRr();
			this.state = 1008;
			this.kwSfunc();
			this.state = 1009;
			this.function();
			this.state = 1010;
			this.kwStype();
			this.state = 1011;
			this.dataType();
			this.state = 1012;
			this.kwFinalfunc();
			this.state = 1013;
			this.function();
			this.state = 1014;
			this.kwInitcond();
			this.state = 1015;
			this.initCondDefinition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public initCondDefinition(): InitCondDefinitionContext {
		let _localctx: InitCondDefinitionContext = new InitCondDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, CqlParser.RULE_initCondDefinition);
		try {
			this.state = 1021;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,46,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1017;
				this.constant();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1018;
				this.initCondList();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1019;
				this.initCondListNested();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1020;
				this.initCondHash();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public initCondHash(): InitCondHashContext {
		let _localctx: InitCondHashContext = new InitCondHashContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, CqlParser.RULE_initCondHash);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1023;
			this.syntaxBracketLc();
			this.state = 1024;
			this.initCondHashItem();
			this.state = 1030;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1025;
				this.syntaxComma();
				this.state = 1026;
				this.initCondHashItem();
				}
				}
				this.state = 1032;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1033;
			this.syntaxBracketRc();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public initCondHashItem(): InitCondHashItemContext {
		let _localctx: InitCondHashItemContext = new InitCondHashItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, CqlParser.RULE_initCondHashItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1035;
			this.hashKey();
			this.state = 1036;
			this.match(CqlParser.COLON);
			this.state = 1037;
			this.initCondDefinition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public initCondListNested(): InitCondListNestedContext {
		let _localctx: InitCondListNestedContext = new InitCondListNestedContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, CqlParser.RULE_initCondListNested);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1039;
			this.syntaxBracketLr();
			this.state = 1040;
			this.initCondList();
			this.state = 1047;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.LR_BRACKET || _la===CqlParser.COMMA) {
				{
				this.state = 1045;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CqlParser.COMMA:
					{
					this.state = 1041;
					this.syntaxComma();
					this.state = 1042;
					this.constant();
					}
					break;
				case CqlParser.LR_BRACKET:
					{
					this.state = 1044;
					this.initCondList();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 1049;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1050;
			this.syntaxBracketRr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public initCondList(): InitCondListContext {
		let _localctx: InitCondListContext = new InitCondListContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, CqlParser.RULE_initCondList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1052;
			this.syntaxBracketLr();
			this.state = 1053;
			this.constant();
			this.state = 1059;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1054;
				this.syntaxComma();
				this.state = 1055;
				this.constant();
				}
				}
				this.state = 1061;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1062;
			this.syntaxBracketRr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public orReplace(): OrReplaceContext {
		let _localctx: OrReplaceContext = new OrReplaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, CqlParser.RULE_orReplace);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1064;
			this.kwOr();
			this.state = 1065;
			this.kwReplace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterUser(): AlterUserContext {
		let _localctx: AlterUserContext = new AlterUserContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, CqlParser.RULE_alterUser);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1067;
			this.kwAlter();
			this.state = 1068;
			this.kwUser();
			this.state = 1069;
			this.user();
			this.state = 1070;
			this.kwWith();
			this.state = 1071;
			this.userPassword();
			this.state = 1073;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_NOSUPERUSER || _la===CqlParser.K_SUPERUSER) {
				{
				this.state = 1072;
				this.userSuperUser();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public userPassword(): UserPasswordContext {
		let _localctx: UserPasswordContext = new UserPasswordContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, CqlParser.RULE_userPassword);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1075;
			this.kwPassword();
			this.state = 1076;
			this.literalString();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public userSuperUser(): UserSuperUserContext {
		let _localctx: UserSuperUserContext = new UserSuperUserContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, CqlParser.RULE_userSuperUser);
		try {
			this.state = 1080;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_SUPERUSER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1078;
				this.kwSuperuser();
				}
				break;
			case CqlParser.K_NOSUPERUSER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1079;
				this.kwNosuperuser();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterType(): AlterTypeContext {
		let _localctx: AlterTypeContext = new AlterTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, CqlParser.RULE_alterType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1082;
			this.kwAlter();
			this.state = 1083;
			this.kwType();
			this.state = 1087;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,53,this._ctx) ) {
			case 1:
				{
				this.state = 1084;
				this.keyspace();
				this.state = 1085;
				this.match(CqlParser.DOT);
				}
				break;
			}
			this.state = 1089;
			this.type();
			this.state = 1090;
			this.alterTypeOperation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterTypeOperation(): AlterTypeOperationContext {
		let _localctx: AlterTypeOperationContext = new AlterTypeOperationContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, CqlParser.RULE_alterTypeOperation);
		try {
			this.state = 1095;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_ALTER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1092;
				this.alterTypeAlterType();
				}
				break;
			case CqlParser.K_ADD:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1093;
				this.alterTypeAdd();
				}
				break;
			case CqlParser.K_RENAME:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1094;
				this.alterTypeRename();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterTypeRename(): AlterTypeRenameContext {
		let _localctx: AlterTypeRenameContext = new AlterTypeRenameContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, CqlParser.RULE_alterTypeRename);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1097;
			this.kwRename();
			this.state = 1098;
			this.alterTypeRenameList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterTypeRenameList(): AlterTypeRenameListContext {
		let _localctx: AlterTypeRenameListContext = new AlterTypeRenameListContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, CqlParser.RULE_alterTypeRenameList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1100;
			this.alterTypeRenameItem();
			this.state = 1106;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.K_AND) {
				{
				{
				this.state = 1101;
				this.kwAnd();
				this.state = 1102;
				this.alterTypeRenameItem();
				}
				}
				this.state = 1108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterTypeRenameItem(): AlterTypeRenameItemContext {
		let _localctx: AlterTypeRenameItemContext = new AlterTypeRenameItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, CqlParser.RULE_alterTypeRenameItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1109;
			this.column();
			this.state = 1110;
			this.kwTo();
			this.state = 1111;
			this.column();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterTypeAdd(): AlterTypeAddContext {
		let _localctx: AlterTypeAddContext = new AlterTypeAddContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, CqlParser.RULE_alterTypeAdd);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1113;
			this.kwAdd();
			this.state = 1114;
			this.column();
			this.state = 1115;
			this.dataType();
			this.state = 1122;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1116;
				this.syntaxComma();
				this.state = 1117;
				this.column();
				this.state = 1118;
				this.dataType();
				}
				}
				this.state = 1124;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterTypeAlterType(): AlterTypeAlterTypeContext {
		let _localctx: AlterTypeAlterTypeContext = new AlterTypeAlterTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, CqlParser.RULE_alterTypeAlterType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1125;
			this.kwAlter();
			this.state = 1126;
			this.column();
			this.state = 1127;
			this.kwType();
			this.state = 1128;
			this.dataType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterTable(): AlterTableContext {
		let _localctx: AlterTableContext = new AlterTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, CqlParser.RULE_alterTable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1130;
			this.kwAlter();
			this.state = 1131;
			this.kwTable();
			this.state = 1135;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,57,this._ctx) ) {
			case 1:
				{
				this.state = 1132;
				this.keyspace();
				this.state = 1133;
				this.match(CqlParser.DOT);
				}
				break;
			}
			this.state = 1137;
			this.table();
			this.state = 1138;
			this.alterTableOperation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterTableOperation(): AlterTableOperationContext {
		let _localctx: AlterTableOperationContext = new AlterTableOperationContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, CqlParser.RULE_alterTableOperation);
		try {
			this.state = 1146;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,58,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1140;
				this.alterTableAdd();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1141;
				this.alterTableDropColumns();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1142;
				this.alterTableDropColumns();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1143;
				this.alterTableDropCompactStorage();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1144;
				this.alterTableRename();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1145;
				this.alterTableWith();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterTableWith(): AlterTableWithContext {
		let _localctx: AlterTableWithContext = new AlterTableWithContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, CqlParser.RULE_alterTableWith);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1148;
			this.kwWith();
			this.state = 1149;
			this.tableOptions();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterTableRename(): AlterTableRenameContext {
		let _localctx: AlterTableRenameContext = new AlterTableRenameContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, CqlParser.RULE_alterTableRename);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1151;
			this.kwRename();
			this.state = 1152;
			this.column();
			this.state = 1153;
			this.kwTo();
			this.state = 1154;
			this.column();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterTableDropCompactStorage(): AlterTableDropCompactStorageContext {
		let _localctx: AlterTableDropCompactStorageContext = new AlterTableDropCompactStorageContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, CqlParser.RULE_alterTableDropCompactStorage);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1156;
			this.kwDrop();
			this.state = 1157;
			this.kwCompact();
			this.state = 1158;
			this.kwStorage();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterTableDropColumns(): AlterTableDropColumnsContext {
		let _localctx: AlterTableDropColumnsContext = new AlterTableDropColumnsContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, CqlParser.RULE_alterTableDropColumns);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1160;
			this.kwDrop();
			this.state = 1161;
			this.alterTableDropColumnList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterTableDropColumnList(): AlterTableDropColumnListContext {
		let _localctx: AlterTableDropColumnListContext = new AlterTableDropColumnListContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, CqlParser.RULE_alterTableDropColumnList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1163;
			this.column();
			this.state = 1169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1164;
				this.syntaxComma();
				this.state = 1165;
				this.column();
				}
				}
				this.state = 1171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterTableAdd(): AlterTableAddContext {
		let _localctx: AlterTableAddContext = new AlterTableAddContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, CqlParser.RULE_alterTableAdd);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1172;
			this.kwAdd();
			this.state = 1173;
			this.alterTableColumnDefinition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterTableColumnDefinition(): AlterTableColumnDefinitionContext {
		let _localctx: AlterTableColumnDefinitionContext = new AlterTableColumnDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, CqlParser.RULE_alterTableColumnDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1175;
			this.column();
			this.state = 1176;
			this.dataType();
			this.state = 1183;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1177;
				this.syntaxComma();
				this.state = 1178;
				this.column();
				this.state = 1179;
				this.dataType();
				}
				}
				this.state = 1185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterRole(): AlterRoleContext {
		let _localctx: AlterRoleContext = new AlterRoleContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, CqlParser.RULE_alterRole);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1186;
			this.kwAlter();
			this.state = 1187;
			this.kwRole();
			this.state = 1188;
			this.role();
			this.state = 1190;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_WITH) {
				{
				this.state = 1189;
				this.roleWith();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public roleWith(): RoleWithContext {
		let _localctx: RoleWithContext = new RoleWithContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, CqlParser.RULE_roleWith);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1192;
			this.kwWith();
			{
			this.state = 1193;
			this.roleWithOptions();
			this.state = 1199;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.K_AND) {
				{
				{
				this.state = 1194;
				this.kwAnd();
				this.state = 1195;
				this.roleWithOptions();
				}
				}
				this.state = 1201;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public roleWithOptions(): RoleWithOptionsContext {
		let _localctx: RoleWithOptionsContext = new RoleWithOptionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, CqlParser.RULE_roleWithOptions);
		try {
			this.state = 1218;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_PASSWORD:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1202;
				this.kwPassword();
				this.state = 1203;
				this.match(CqlParser.OPERATOR_EQ);
				this.state = 1204;
				this.literalString();
				}
				break;
			case CqlParser.K_LOGIN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1206;
				this.kwLogin();
				this.state = 1207;
				this.match(CqlParser.OPERATOR_EQ);
				this.state = 1208;
				this.literalBoolean();
				}
				break;
			case CqlParser.K_SUPERUSER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1210;
				this.kwSuperuser();
				this.state = 1211;
				this.match(CqlParser.OPERATOR_EQ);
				this.state = 1212;
				this.literalBoolean();
				}
				break;
			case CqlParser.K_OPTIONS:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1214;
				this.kwOptions();
				this.state = 1215;
				this.match(CqlParser.OPERATOR_EQ);
				this.state = 1216;
				this.optionHash();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterMaterializedView(): AlterMaterializedViewContext {
		let _localctx: AlterMaterializedViewContext = new AlterMaterializedViewContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, CqlParser.RULE_alterMaterializedView);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1220;
			this.kwAlter();
			this.state = 1221;
			this.kwMaterialized();
			this.state = 1222;
			this.kwView();
			this.state = 1226;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,64,this._ctx) ) {
			case 1:
				{
				this.state = 1223;
				this.keyspace();
				this.state = 1224;
				this.match(CqlParser.DOT);
				}
				break;
			}
			this.state = 1228;
			this.materializedView();
			this.state = 1232;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_WITH) {
				{
				this.state = 1229;
				this.kwWith();
				this.state = 1230;
				this.tableOptions();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dropUser(): DropUserContext {
		let _localctx: DropUserContext = new DropUserContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, CqlParser.RULE_dropUser);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1234;
			this.kwDrop();
			this.state = 1235;
			this.kwUser();
			this.state = 1237;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 1236;
				this.ifExist();
				}
			}

			this.state = 1239;
			this.user();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dropType(): DropTypeContext {
		let _localctx: DropTypeContext = new DropTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, CqlParser.RULE_dropType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1241;
			this.kwDrop();
			this.state = 1242;
			this.kwType();
			this.state = 1244;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 1243;
				this.ifExist();
				}
			}

			this.state = 1249;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,68,this._ctx) ) {
			case 1:
				{
				this.state = 1246;
				this.keyspace();
				this.state = 1247;
				this.match(CqlParser.DOT);
				}
				break;
			}
			this.state = 1251;
			this.type();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dropMaterializedView(): DropMaterializedViewContext {
		let _localctx: DropMaterializedViewContext = new DropMaterializedViewContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, CqlParser.RULE_dropMaterializedView);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1253;
			this.kwDrop();
			this.state = 1254;
			this.kwMaterialized();
			this.state = 1255;
			this.kwView();
			this.state = 1257;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 1256;
				this.ifExist();
				}
			}

			this.state = 1262;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,70,this._ctx) ) {
			case 1:
				{
				this.state = 1259;
				this.keyspace();
				this.state = 1260;
				this.match(CqlParser.DOT);
				}
				break;
			}
			this.state = 1264;
			this.materializedView();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dropAggregate(): DropAggregateContext {
		let _localctx: DropAggregateContext = new DropAggregateContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, CqlParser.RULE_dropAggregate);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1266;
			this.kwDrop();
			this.state = 1267;
			this.kwAggregate();
			this.state = 1269;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 1268;
				this.ifExist();
				}
			}

			this.state = 1274;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,72,this._ctx) ) {
			case 1:
				{
				this.state = 1271;
				this.keyspace();
				this.state = 1272;
				this.match(CqlParser.DOT);
				}
				break;
			}
			this.state = 1276;
			this.aggregate();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dropFunction(): DropFunctionContext {
		let _localctx: DropFunctionContext = new DropFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, CqlParser.RULE_dropFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1278;
			this.kwDrop();
			this.state = 1279;
			this.kwFunction();
			this.state = 1281;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 1280;
				this.ifExist();
				}
			}

			this.state = 1286;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,74,this._ctx) ) {
			case 1:
				{
				this.state = 1283;
				this.keyspace();
				this.state = 1284;
				this.match(CqlParser.DOT);
				}
				break;
			}
			this.state = 1288;
			this.function();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dropTrigger(): DropTriggerContext {
		let _localctx: DropTriggerContext = new DropTriggerContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, CqlParser.RULE_dropTrigger);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1290;
			this.kwDrop();
			this.state = 1291;
			this.kwTrigger();
			this.state = 1293;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 1292;
				this.ifExist();
				}
			}

			this.state = 1295;
			this.trigger();
			this.state = 1296;
			this.kwOn();
			this.state = 1300;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,76,this._ctx) ) {
			case 1:
				{
				this.state = 1297;
				this.keyspace();
				this.state = 1298;
				this.match(CqlParser.DOT);
				}
				break;
			}
			this.state = 1302;
			this.table();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dropRole(): DropRoleContext {
		let _localctx: DropRoleContext = new DropRoleContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, CqlParser.RULE_dropRole);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1304;
			this.kwDrop();
			this.state = 1305;
			this.kwRole();
			this.state = 1307;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 1306;
				this.ifExist();
				}
			}

			this.state = 1309;
			this.role();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dropTable(): DropTableContext {
		let _localctx: DropTableContext = new DropTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, CqlParser.RULE_dropTable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1311;
			this.kwDrop();
			this.state = 1312;
			this.kwTable();
			this.state = 1314;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 1313;
				this.ifExist();
				}
			}

			this.state = 1319;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,79,this._ctx) ) {
			case 1:
				{
				this.state = 1316;
				this.keyspace();
				this.state = 1317;
				this.match(CqlParser.DOT);
				}
				break;
			}
			this.state = 1321;
			this.table();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dropKeyspace(): DropKeyspaceContext {
		let _localctx: DropKeyspaceContext = new DropKeyspaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, CqlParser.RULE_dropKeyspace);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1323;
			this.kwDrop();
			this.state = 1324;
			this.kwKeyspace();
			this.state = 1326;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 1325;
				this.ifExist();
				}
			}

			this.state = 1328;
			this.keyspace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dropIndex(): DropIndexContext {
		let _localctx: DropIndexContext = new DropIndexContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, CqlParser.RULE_dropIndex);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1330;
			this.kwDrop();
			this.state = 1331;
			this.kwIndex();
			this.state = 1333;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 1332;
				this.ifExist();
				}
			}

			this.state = 1338;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,82,this._ctx) ) {
			case 1:
				{
				this.state = 1335;
				this.keyspace();
				this.state = 1336;
				this.match(CqlParser.DOT);
				}
				break;
			}
			this.state = 1340;
			this.indexName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public createTable(): CreateTableContext {
		let _localctx: CreateTableContext = new CreateTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, CqlParser.RULE_createTable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1342;
			this.kwCreate();
			this.state = 1343;
			this.kwTable();
			this.state = 1345;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 1344;
				this.ifNotExist();
				}
			}

			this.state = 1350;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,84,this._ctx) ) {
			case 1:
				{
				this.state = 1347;
				this.keyspace();
				this.state = 1348;
				this.match(CqlParser.DOT);
				}
				break;
			}
			this.state = 1352;
			this.table();
			this.state = 1353;
			this.syntaxBracketLr();
			this.state = 1354;
			this.columnDefinitionList();
			this.state = 1355;
			this.syntaxBracketRr();
			this.state = 1357;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_WITH) {
				{
				this.state = 1356;
				this.withElement();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public withElement(): WithElementContext {
		let _localctx: WithElementContext = new WithElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, CqlParser.RULE_withElement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1359;
			this.kwWith();
			this.state = 1361;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.OBJECT_NAME) {
				{
				this.state = 1360;
				this.tableOptions();
				}
			}

			this.state = 1364;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_CLUSTERING) {
				{
				this.state = 1363;
				this.clusteringOrder();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public clusteringOrder(): ClusteringOrderContext {
		let _localctx: ClusteringOrderContext = new ClusteringOrderContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, CqlParser.RULE_clusteringOrder);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1366;
			this.kwClustering();
			this.state = 1367;
			this.kwOrder();
			this.state = 1368;
			this.kwBy();
			this.state = 1369;
			this.syntaxBracketLr();
			this.state = 1370;
			this.column();
			this.state = 1372;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_ASC || _la===CqlParser.K_DESC) {
				{
				this.state = 1371;
				this.orderDirection();
				}
			}

			this.state = 1374;
			this.syntaxBracketRr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public tableOptions(): TableOptionsContext {
		let _localctx: TableOptionsContext = new TableOptionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, CqlParser.RULE_tableOptions);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1376;
			this.tableOptionItem();
			this.state = 1382;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,89,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1377;
					this.kwAnd();
					this.state = 1378;
					this.tableOptionItem();
					}
					} 
				}
				this.state = 1384;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,89,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public tableOptionItem(): TableOptionItemContext {
		let _localctx: TableOptionItemContext = new TableOptionItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, CqlParser.RULE_tableOptionItem);
		try {
			this.state = 1393;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,90,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1385;
				this.tableOptionName();
				this.state = 1386;
				this.match(CqlParser.OPERATOR_EQ);
				this.state = 1387;
				this.tableOptionValue();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1389;
				this.tableOptionName();
				this.state = 1390;
				this.match(CqlParser.OPERATOR_EQ);
				this.state = 1391;
				this.optionHash();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public tableOptionName(): TableOptionNameContext {
		let _localctx: TableOptionNameContext = new TableOptionNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, CqlParser.RULE_tableOptionName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1395;
			this.match(CqlParser.OBJECT_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public tableOptionValue(): TableOptionValueContext {
		let _localctx: TableOptionValueContext = new TableOptionValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, CqlParser.RULE_tableOptionValue);
		try {
			this.state = 1399;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1397;
				this.literalString();
				}
				break;
			case CqlParser.DECIMAL_LITERAL:
			case CqlParser.FLOAT_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1398;
				this.literalFloat();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public optionHash(): OptionHashContext {
		let _localctx: OptionHashContext = new OptionHashContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, CqlParser.RULE_optionHash);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1401;
			this.syntaxBracketLc();
			this.state = 1402;
			this.optionHashItem();
			this.state = 1408;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1403;
				this.syntaxComma();
				this.state = 1404;
				this.optionHashItem();
				}
				}
				this.state = 1410;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1411;
			this.syntaxBracketRc();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public optionHashItem(): OptionHashItemContext {
		let _localctx: OptionHashItemContext = new OptionHashItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, CqlParser.RULE_optionHashItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1413;
			this.optionHashKey();
			this.state = 1414;
			this.match(CqlParser.COLON);
			this.state = 1415;
			this.optionHashValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public optionHashKey(): OptionHashKeyContext {
		let _localctx: OptionHashKeyContext = new OptionHashKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, CqlParser.RULE_optionHashKey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1417;
			this.literalString();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public optionHashValue(): OptionHashValueContext {
		let _localctx: OptionHashValueContext = new OptionHashValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, CqlParser.RULE_optionHashValue);
		try {
			this.state = 1421;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1419;
				this.literalString();
				}
				break;
			case CqlParser.DECIMAL_LITERAL:
			case CqlParser.FLOAT_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1420;
				this.literalFloat();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public columnDefinitionList(): ColumnDefinitionListContext {
		let _localctx: ColumnDefinitionListContext = new ColumnDefinitionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, CqlParser.RULE_columnDefinitionList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1423;
			this.columnDefinition();
			}
			this.state = 1429;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,94,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1424;
					this.syntaxComma();
					this.state = 1425;
					this.columnDefinition();
					}
					} 
				}
				this.state = 1431;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,94,this._ctx);
			}
			this.state = 1435;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.COMMA) {
				{
				this.state = 1432;
				this.syntaxComma();
				this.state = 1433;
				this.primaryKeyElement();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public columnDefinition(): ColumnDefinitionContext {
		let _localctx: ColumnDefinitionContext = new ColumnDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, CqlParser.RULE_columnDefinition);
		try {
			this.state = 1448;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,96,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1437;
				this.column();
				this.state = 1438;
				this.dataType();
				this.state = 1439;
				this.primaryKeyColumn();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1441;
				this.column();
				this.state = 1442;
				this.dataType();
				this.state = 1443;
				this.kwStatic();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1445;
				this.column();
				this.state = 1446;
				this.dataType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public primaryKeyColumn(): PrimaryKeyColumnContext {
		let _localctx: PrimaryKeyColumnContext = new PrimaryKeyColumnContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, CqlParser.RULE_primaryKeyColumn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1450;
			this.kwPrimary();
			this.state = 1451;
			this.kwKey();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public primaryKeyElement(): PrimaryKeyElementContext {
		let _localctx: PrimaryKeyElementContext = new PrimaryKeyElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, CqlParser.RULE_primaryKeyElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1453;
			this.kwPrimary();
			this.state = 1454;
			this.kwKey();
			this.state = 1455;
			this.syntaxBracketLr();
			this.state = 1456;
			this.primaryKeyDefinition();
			this.state = 1457;
			this.syntaxBracketRr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public primaryKeyDefinition(): PrimaryKeyDefinitionContext {
		let _localctx: PrimaryKeyDefinitionContext = new PrimaryKeyDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, CqlParser.RULE_primaryKeyDefinition);
		try {
			this.state = 1462;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,97,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1459;
				this.singlePrimaryKey();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1460;
				this.compoundKey();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1461;
				this.compositeKey();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public singlePrimaryKey(): SinglePrimaryKeyContext {
		let _localctx: SinglePrimaryKeyContext = new SinglePrimaryKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, CqlParser.RULE_singlePrimaryKey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1464;
			this.column();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public compoundKey(): CompoundKeyContext {
		let _localctx: CompoundKeyContext = new CompoundKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, CqlParser.RULE_compoundKey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1466;
			this.partitionKey();
			{
			this.state = 1467;
			this.syntaxComma();
			this.state = 1468;
			this.clusteringKeyList();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public compositeKey(): CompositeKeyContext {
		let _localctx: CompositeKeyContext = new CompositeKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, CqlParser.RULE_compositeKey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1470;
			this.syntaxBracketLr();
			this.state = 1471;
			this.partitionKeyList();
			this.state = 1472;
			this.syntaxBracketRr();
			{
			this.state = 1473;
			this.syntaxComma();
			this.state = 1474;
			this.clusteringKeyList();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public partitionKeyList(): PartitionKeyListContext {
		let _localctx: PartitionKeyListContext = new PartitionKeyListContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, CqlParser.RULE_partitionKeyList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1476;
			this.partitionKey();
			}
			this.state = 1482;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1477;
				this.syntaxComma();
				this.state = 1478;
				this.partitionKey();
				}
				}
				this.state = 1484;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public clusteringKeyList(): ClusteringKeyListContext {
		let _localctx: ClusteringKeyListContext = new ClusteringKeyListContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, CqlParser.RULE_clusteringKeyList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1485;
			this.clusteringKey();
			}
			this.state = 1491;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1486;
				this.syntaxComma();
				this.state = 1487;
				this.clusteringKey();
				}
				}
				this.state = 1493;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public partitionKey(): PartitionKeyContext {
		let _localctx: PartitionKeyContext = new PartitionKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, CqlParser.RULE_partitionKey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1494;
			this.column();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public clusteringKey(): ClusteringKeyContext {
		let _localctx: ClusteringKeyContext = new ClusteringKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, CqlParser.RULE_clusteringKey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1496;
			this.column();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public applyBatch(): ApplyBatchContext {
		let _localctx: ApplyBatchContext = new ApplyBatchContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, CqlParser.RULE_applyBatch);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1498;
			this.kwApply();
			this.state = 1499;
			this.kwBatch();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public beginBatch(): BeginBatchContext {
		let _localctx: BeginBatchContext = new BeginBatchContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, CqlParser.RULE_beginBatch);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1501;
			this.kwBegin();
			this.state = 1503;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_LOGGED || _la===CqlParser.K_UNLOGGED) {
				{
				this.state = 1502;
				this.batchType();
				}
			}

			this.state = 1505;
			this.kwBatch();
			this.state = 1507;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_USING) {
				{
				this.state = 1506;
				this.usingTimestampSpec();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public batchType(): BatchTypeContext {
		let _localctx: BatchTypeContext = new BatchTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, CqlParser.RULE_batchType);
		try {
			this.state = 1511;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_LOGGED:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1509;
				this.kwLogged();
				}
				break;
			case CqlParser.K_UNLOGGED:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1510;
				this.kwUnlogged();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alterKeyspace(): AlterKeyspaceContext {
		let _localctx: AlterKeyspaceContext = new AlterKeyspaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, CqlParser.RULE_alterKeyspace);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1513;
			this.kwAlter();
			this.state = 1514;
			this.kwKeyspace();
			this.state = 1515;
			this.keyspace();
			this.state = 1516;
			this.kwWith();
			this.state = 1517;
			this.kwReplication();
			this.state = 1518;
			this.match(CqlParser.OPERATOR_EQ);
			this.state = 1519;
			this.syntaxBracketLc();
			this.state = 1520;
			this.replicationList();
			this.state = 1521;
			this.syntaxBracketRc();
			this.state = 1525;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_AND) {
				{
				this.state = 1522;
				this.kwAnd();
				this.state = 1523;
				this.durableWrites();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public replicationList(): ReplicationListContext {
		let _localctx: ReplicationListContext = new ReplicationListContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, CqlParser.RULE_replicationList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1527;
			this.replicationListItem();
			}
			this.state = 1533;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1528;
				this.syntaxComma();
				this.state = 1529;
				this.replicationListItem();
				}
				}
				this.state = 1535;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public replicationListItem(): ReplicationListItemContext {
		let _localctx: ReplicationListItemContext = new ReplicationListItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, CqlParser.RULE_replicationListItem);
		try {
			this.state = 1542;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,105,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1536;
				this.match(CqlParser.STRING_LITERAL);
				this.state = 1537;
				this.match(CqlParser.COLON);
				this.state = 1538;
				this.match(CqlParser.STRING_LITERAL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1539;
				this.match(CqlParser.STRING_LITERAL);
				this.state = 1540;
				this.match(CqlParser.COLON);
				this.state = 1541;
				this.match(CqlParser.DECIMAL_LITERAL);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public durableWrites(): DurableWritesContext {
		let _localctx: DurableWritesContext = new DurableWritesContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, CqlParser.RULE_durableWrites);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1544;
			this.kwDurableWrites();
			this.state = 1545;
			this.match(CqlParser.OPERATOR_EQ);
			this.state = 1546;
			this.literalBoolean();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public use(): UseContext {
		let _localctx: UseContext = new UseContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, CqlParser.RULE_use);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1548;
			this.kwUse();
			this.state = 1549;
			this.keyspace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public truncate(): TruncateContext {
		let _localctx: TruncateContext = new TruncateContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, CqlParser.RULE_truncate);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1551;
			this.kwTruncate();
			this.state = 1553;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_TABLE) {
				{
				this.state = 1552;
				this.kwTable();
				}
			}

			this.state = 1558;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,107,this._ctx) ) {
			case 1:
				{
				this.state = 1555;
				this.keyspace();
				this.state = 1556;
				this.match(CqlParser.DOT);
				}
				break;
			}
			this.state = 1560;
			this.table();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public createIndex(): CreateIndexContext {
		let _localctx: CreateIndexContext = new CreateIndexContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, CqlParser.RULE_createIndex);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1562;
			this.kwCreate();
			this.state = 1563;
			this.kwIndex();
			this.state = 1565;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_IF) {
				{
				this.state = 1564;
				this.ifNotExist();
				}
			}

			this.state = 1568;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.STRING_LITERAL || _la===CqlParser.OBJECT_NAME) {
				{
				this.state = 1567;
				this.indexName();
				}
			}

			this.state = 1570;
			this.kwOn();
			this.state = 1574;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,110,this._ctx) ) {
			case 1:
				{
				this.state = 1571;
				this.keyspace();
				this.state = 1572;
				this.match(CqlParser.DOT);
				}
				break;
			}
			this.state = 1576;
			this.table();
			this.state = 1577;
			this.syntaxBracketLr();
			this.state = 1578;
			this.indexColumnSpec();
			this.state = 1579;
			this.syntaxBracketRr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public indexName(): IndexNameContext {
		let _localctx: IndexNameContext = new IndexNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, CqlParser.RULE_indexName);
		try {
			this.state = 1583;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.OBJECT_NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1581;
				this.match(CqlParser.OBJECT_NAME);
				}
				break;
			case CqlParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1582;
				this.literalString();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public indexColumnSpec(): IndexColumnSpecContext {
		let _localctx: IndexColumnSpecContext = new IndexColumnSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, CqlParser.RULE_indexColumnSpec);
		try {
			this.state = 1589;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.DQUOTE:
			case CqlParser.OBJECT_NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1585;
				this.column();
				}
				break;
			case CqlParser.K_KEYS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1586;
				this.indexKeysSpec();
				}
				break;
			case CqlParser.K_ENTRIES:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1587;
				this.indexEntriesSSpec();
				}
				break;
			case CqlParser.K_FULL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1588;
				this.indexFullSpec();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public indexKeysSpec(): IndexKeysSpecContext {
		let _localctx: IndexKeysSpecContext = new IndexKeysSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, CqlParser.RULE_indexKeysSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1591;
			this.kwKeys();
			this.state = 1592;
			this.syntaxBracketLr();
			this.state = 1593;
			this.match(CqlParser.OBJECT_NAME);
			this.state = 1594;
			this.syntaxBracketRr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public indexEntriesSSpec(): IndexEntriesSSpecContext {
		let _localctx: IndexEntriesSSpecContext = new IndexEntriesSSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, CqlParser.RULE_indexEntriesSSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1596;
			this.kwEntries();
			this.state = 1597;
			this.syntaxBracketLr();
			this.state = 1598;
			this.match(CqlParser.OBJECT_NAME);
			this.state = 1599;
			this.syntaxBracketRr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public indexFullSpec(): IndexFullSpecContext {
		let _localctx: IndexFullSpecContext = new IndexFullSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, CqlParser.RULE_indexFullSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1601;
			this.kwFull();
			this.state = 1602;
			this.syntaxBracketLr();
			this.state = 1603;
			this.match(CqlParser.OBJECT_NAME);
			this.state = 1604;
			this.syntaxBracketRr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public delete(): DeleteContext {
		let _localctx: DeleteContext = new DeleteContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, CqlParser.RULE_delete);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1607;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_BEGIN) {
				{
				this.state = 1606;
				this.beginBatch();
				}
			}

			this.state = 1609;
			this.kwDelete();
			this.state = 1611;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.OBJECT_NAME) {
				{
				this.state = 1610;
				this.deleteColumnList();
				}
			}

			this.state = 1613;
			this.fromSpec();
			this.state = 1615;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_USING) {
				{
				this.state = 1614;
				this.usingTimestampSpec();
				}
			}

			this.state = 1617;
			this.whereSpec();
			this.state = 1620;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,116,this._ctx) ) {
			case 1:
				{
				this.state = 1618;
				this.ifExist();
				}
				break;

			case 2:
				{
				this.state = 1619;
				this.ifSpec();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public deleteColumnList(): DeleteColumnListContext {
		let _localctx: DeleteColumnListContext = new DeleteColumnListContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, CqlParser.RULE_deleteColumnList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1622;
			this.deleteColumnItem();
			}
			this.state = 1628;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1623;
				this.syntaxComma();
				this.state = 1624;
				this.deleteColumnItem();
				}
				}
				this.state = 1630;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public deleteColumnItem(): DeleteColumnItemContext {
		let _localctx: DeleteColumnItemContext = new DeleteColumnItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, CqlParser.RULE_deleteColumnItem);
		try {
			this.state = 1640;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,119,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1631;
				this.match(CqlParser.OBJECT_NAME);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1632;
				this.match(CqlParser.OBJECT_NAME);
				this.state = 1633;
				this.match(CqlParser.LS_BRACKET);
				this.state = 1636;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CqlParser.STRING_LITERAL:
					{
					this.state = 1634;
					this.literalString();
					}
					break;
				case CqlParser.DECIMAL_LITERAL:
					{
					this.state = 1635;
					this.literalDecimal();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1638;
				this.match(CqlParser.RS_BRACKET);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public update(): UpdateContext {
		let _localctx: UpdateContext = new UpdateContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, CqlParser.RULE_update);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1643;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_BEGIN) {
				{
				this.state = 1642;
				this.beginBatch();
				}
			}

			this.state = 1645;
			this.kwUpdate();
			this.state = 1649;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,121,this._ctx) ) {
			case 1:
				{
				this.state = 1646;
				this.keyspace();
				this.state = 1647;
				this.match(CqlParser.DOT);
				}
				break;
			}
			this.state = 1651;
			this.table();
			this.state = 1653;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_USING) {
				{
				this.state = 1652;
				this.usingTtlTimestamp();
				}
			}

			this.state = 1655;
			this.kwSet();
			this.state = 1656;
			this.assignments();
			this.state = 1657;
			this.whereSpec();
			this.state = 1660;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,123,this._ctx) ) {
			case 1:
				{
				this.state = 1658;
				this.ifExist();
				}
				break;

			case 2:
				{
				this.state = 1659;
				this.ifSpec();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public ifSpec(): IfSpecContext {
		let _localctx: IfSpecContext = new IfSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, CqlParser.RULE_ifSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1662;
			this.kwIf();
			this.state = 1663;
			this.ifConditionList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public ifConditionList(): IfConditionListContext {
		let _localctx: IfConditionListContext = new IfConditionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, CqlParser.RULE_ifConditionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1665;
			this.ifCondition();
			}
			this.state = 1671;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.K_AND) {
				{
				{
				this.state = 1666;
				this.kwAnd();
				this.state = 1667;
				this.ifCondition();
				}
				}
				this.state = 1673;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public ifCondition(): IfConditionContext {
		let _localctx: IfConditionContext = new IfConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, CqlParser.RULE_ifCondition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1674;
			this.match(CqlParser.OBJECT_NAME);
			this.state = 1675;
			this.match(CqlParser.OPERATOR_EQ);
			this.state = 1676;
			this.constant();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public assignments(): AssignmentsContext {
		let _localctx: AssignmentsContext = new AssignmentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, CqlParser.RULE_assignments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1678;
			this.assignmentElement();
			}
			this.state = 1684;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1679;
				this.syntaxComma();
				this.state = 1680;
				this.assignmentElement();
				}
				}
				this.state = 1686;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public assignmentElement(): AssignmentElementContext {
		let _localctx: AssignmentElementContext = new AssignmentElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, CqlParser.RULE_assignmentElement);
		let _la: number;
		try {
			this.state = 1740;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,127,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1687;
				this.match(CqlParser.OBJECT_NAME);
				this.state = 1688;
				this.match(CqlParser.OPERATOR_EQ);
				this.state = 1693;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,126,this._ctx) ) {
				case 1:
					{
					this.state = 1689;
					this.constant();
					}
					break;

				case 2:
					{
					this.state = 1690;
					this.assignmentMap();
					}
					break;

				case 3:
					{
					this.state = 1691;
					this.assignmentSet();
					}
					break;

				case 4:
					{
					this.state = 1692;
					this.assignmentList();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1695;
				this.match(CqlParser.OBJECT_NAME);
				this.state = 1696;
				this.match(CqlParser.OPERATOR_EQ);
				this.state = 1697;
				this.match(CqlParser.OBJECT_NAME);
				this.state = 1698;
				_la = this._input.LA(1);
				if ( !(_la===CqlParser.PLUS || _la===CqlParser.MINUS) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1699;
				this.literalDecimal();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1700;
				this.match(CqlParser.OBJECT_NAME);
				this.state = 1701;
				this.match(CqlParser.OPERATOR_EQ);
				this.state = 1702;
				this.match(CqlParser.OBJECT_NAME);
				this.state = 1703;
				_la = this._input.LA(1);
				if ( !(_la===CqlParser.PLUS || _la===CqlParser.MINUS) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1704;
				this.assignmentSet();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1705;
				this.match(CqlParser.OBJECT_NAME);
				this.state = 1706;
				this.match(CqlParser.OPERATOR_EQ);
				this.state = 1707;
				this.assignmentSet();
				this.state = 1708;
				_la = this._input.LA(1);
				if ( !(_la===CqlParser.PLUS || _la===CqlParser.MINUS) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1709;
				this.match(CqlParser.OBJECT_NAME);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1711;
				this.match(CqlParser.OBJECT_NAME);
				this.state = 1712;
				this.match(CqlParser.OPERATOR_EQ);
				this.state = 1713;
				this.match(CqlParser.OBJECT_NAME);
				this.state = 1714;
				_la = this._input.LA(1);
				if ( !(_la===CqlParser.PLUS || _la===CqlParser.MINUS) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1715;
				this.assignmentMap();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1716;
				this.match(CqlParser.OBJECT_NAME);
				this.state = 1717;
				this.match(CqlParser.OPERATOR_EQ);
				this.state = 1718;
				this.assignmentMap();
				this.state = 1719;
				_la = this._input.LA(1);
				if ( !(_la===CqlParser.PLUS || _la===CqlParser.MINUS) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1720;
				this.match(CqlParser.OBJECT_NAME);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1722;
				this.match(CqlParser.OBJECT_NAME);
				this.state = 1723;
				this.match(CqlParser.OPERATOR_EQ);
				this.state = 1724;
				this.match(CqlParser.OBJECT_NAME);
				this.state = 1725;
				_la = this._input.LA(1);
				if ( !(_la===CqlParser.PLUS || _la===CqlParser.MINUS) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1726;
				this.assignmentList();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1727;
				this.match(CqlParser.OBJECT_NAME);
				this.state = 1728;
				this.match(CqlParser.OPERATOR_EQ);
				this.state = 1729;
				this.assignmentList();
				this.state = 1730;
				_la = this._input.LA(1);
				if ( !(_la===CqlParser.PLUS || _la===CqlParser.MINUS) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1731;
				this.match(CqlParser.OBJECT_NAME);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1733;
				this.match(CqlParser.OBJECT_NAME);
				this.state = 1734;
				this.syntaxBracketLs();
				this.state = 1735;
				this.literalDecimal();
				this.state = 1736;
				this.syntaxBracketRs();
				this.state = 1737;
				this.match(CqlParser.OPERATOR_EQ);
				this.state = 1738;
				this.constant();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public assignmentSet(): AssignmentSetContext {
		let _localctx: AssignmentSetContext = new AssignmentSetContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, CqlParser.RULE_assignmentSet);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1742;
			this.syntaxBracketLc();
			this.state = 1743;
			this.constant();
			this.state = 1749;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1744;
				this.syntaxComma();
				this.state = 1745;
				this.constant();
				}
				}
				this.state = 1751;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1752;
			this.syntaxBracketRc();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public assignmentMap(): AssignmentMapContext {
		let _localctx: AssignmentMapContext = new AssignmentMapContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, CqlParser.RULE_assignmentMap);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1754;
			this.syntaxBracketLc();
			{
			this.state = 1755;
			this.constant();
			this.state = 1756;
			this.syntaxColon();
			this.state = 1757;
			this.constant();
			}
			this.state = 1765;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.K_FALSE || _la===CqlParser.K_NULL || _la===CqlParser.K_TRUE || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (CqlParser.STRING_LITERAL - 164)) | (1 << (CqlParser.DECIMAL_LITERAL - 164)) | (1 << (CqlParser.HEXADECIMAL_LITERAL - 164)) | (1 << (CqlParser.UUID - 164)))) !== 0)) {
				{
				{
				this.state = 1759;
				this.constant();
				this.state = 1760;
				this.syntaxColon();
				this.state = 1761;
				this.constant();
				}
				}
				this.state = 1767;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1768;
			this.syntaxBracketRc();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public assignmentList(): AssignmentListContext {
		let _localctx: AssignmentListContext = new AssignmentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, CqlParser.RULE_assignmentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1770;
			this.syntaxBracketLs();
			this.state = 1771;
			this.constant();
			this.state = 1777;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COLON) {
				{
				{
				this.state = 1772;
				this.syntaxColon();
				this.state = 1773;
				this.constant();
				}
				}
				this.state = 1779;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1780;
			this.syntaxBracketRs();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public insert(): InsertContext {
		let _localctx: InsertContext = new InsertContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, CqlParser.RULE_insert);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1784;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_BEGIN:
				{
				this.state = 1782;
				this.beginBatch();
				}
				break;
			case CqlParser.K_INSERT:
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1786;
			this.kwInsert();
			this.state = 1787;
			this.kwInto();
			this.state = 1792;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,132,this._ctx) ) {
			case 1:
				{
				this.state = 1788;
				this.keyspace();
				this.state = 1789;
				this.match(CqlParser.DOT);
				}
				break;

			case 2:
				{
				}
				break;
			}
			this.state = 1794;
			this.table();
			this.state = 1795;
			this.insertColumnSpec();
			this.state = 1796;
			this.insertValuesSpec();
			this.state = 1799;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_IF:
				{
				this.state = 1797;
				this.ifNotExist();
				}
				break;
			case CqlParser.EOF:
			case CqlParser.SEMI:
			case CqlParser.MINUSMINUS:
			case CqlParser.K_USING:
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1802;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_USING) {
				{
				this.state = 1801;
				this.usingTtlTimestamp();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public usingTtlTimestamp(): UsingTtlTimestampContext {
		let _localctx: UsingTtlTimestampContext = new UsingTtlTimestampContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, CqlParser.RULE_usingTtlTimestamp);
		try {
			this.state = 1820;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,135,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1804;
				this.kwUsing();
				this.state = 1805;
				this.ttl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1807;
				this.kwUsing();
				this.state = 1808;
				this.ttl();
				this.state = 1809;
				this.kwAnd();
				this.state = 1810;
				this.timestamp();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1812;
				this.kwUsing();
				this.state = 1813;
				this.timestamp();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1815;
				this.kwUsing();
				this.state = 1816;
				this.timestamp();
				this.state = 1817;
				this.kwAnd();
				this.state = 1818;
				this.ttl();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public timestamp(): TimestampContext {
		let _localctx: TimestampContext = new TimestampContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, CqlParser.RULE_timestamp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1822;
			this.kwTimestamp();
			this.state = 1823;
			this.literalDecimal();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public ttl(): TtlContext {
		let _localctx: TtlContext = new TtlContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, CqlParser.RULE_ttl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1825;
			this.kwTtl();
			this.state = 1826;
			this.literalDecimal();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public usingTimestampSpec(): UsingTimestampSpecContext {
		let _localctx: UsingTimestampSpecContext = new UsingTimestampSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, CqlParser.RULE_usingTimestampSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1828;
			this.kwUsing();
			this.state = 1829;
			this.timestamp();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public ifNotExist(): IfNotExistContext {
		let _localctx: IfNotExistContext = new IfNotExistContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, CqlParser.RULE_ifNotExist);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1831;
			this.kwIf();
			this.state = 1832;
			this.kwNot();
			this.state = 1833;
			this.kwExists();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public ifExist(): IfExistContext {
		let _localctx: IfExistContext = new IfExistContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, CqlParser.RULE_ifExist);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1835;
			this.kwIf();
			this.state = 1836;
			this.kwExists();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public insertValuesSpec(): InsertValuesSpecContext {
		let _localctx: InsertValuesSpecContext = new InsertValuesSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, CqlParser.RULE_insertValuesSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1838;
			this.kwValues();
			this.state = 1839;
			this.match(CqlParser.LR_BRACKET);
			this.state = 1840;
			this.expressionList();
			this.state = 1841;
			this.match(CqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public insertColumnSpec(): InsertColumnSpecContext {
		let _localctx: InsertColumnSpecContext = new InsertColumnSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, CqlParser.RULE_insertColumnSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1843;
			this.match(CqlParser.LR_BRACKET);
			this.state = 1844;
			this.columnList();
			this.state = 1845;
			this.match(CqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public columnList(): ColumnListContext {
		let _localctx: ColumnListContext = new ColumnListContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, CqlParser.RULE_columnList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1847;
			this.column();
			this.state = 1853;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1848;
				this.syntaxComma();
				this.state = 1849;
				this.column();
				}
				}
				this.state = 1855;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, CqlParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1860;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,137,this._ctx) ) {
			case 1:
				{
				this.state = 1856;
				this.constant();
				}
				break;

			case 2:
				{
				this.state = 1857;
				this.assignmentMap();
				}
				break;

			case 3:
				{
				this.state = 1858;
				this.assignmentSet();
				}
				break;

			case 4:
				{
				this.state = 1859;
				this.assignmentList();
				}
				break;
			}
			this.state = 1871;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 1862;
				this.syntaxComma();
				this.state = 1867;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,138,this._ctx) ) {
				case 1:
					{
					this.state = 1863;
					this.constant();
					}
					break;

				case 2:
					{
					this.state = 1864;
					this.assignmentMap();
					}
					break;

				case 3:
					{
					this.state = 1865;
					this.assignmentSet();
					}
					break;

				case 4:
					{
					this.state = 1866;
					this.assignmentList();
					}
					break;
				}
				}
				}
				this.state = 1873;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public select(): SelectContext {
		let _localctx: SelectContext = new SelectContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, CqlParser.RULE_select);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1874;
			this.kwSelect();
			this.state = 1876;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_DISTINCT) {
				{
				this.state = 1875;
				this.kwDistinct();
				}
			}

			this.state = 1878;
			this.selectElements();
			this.state = 1879;
			this.fromSpec();
			this.state = 1881;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_WHERE) {
				{
				this.state = 1880;
				this.whereSpec();
				}
			}

			this.state = 1884;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_ORDER) {
				{
				this.state = 1883;
				this.orderSpec();
				}
			}

			this.state = 1887;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_LIMIT) {
				{
				this.state = 1886;
				this.limitSpec();
				}
			}

			this.state = 1890;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===CqlParser.K_ALLOW) {
				{
				this.state = 1889;
				this.kwAllowFiltering();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public limitSpec(): LimitSpecContext {
		let _localctx: LimitSpecContext = new LimitSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, CqlParser.RULE_limitSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1892;
			this.kwLimit();
			this.state = 1893;
			this.literalDecimal();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public fromSpec(): FromSpecContext {
		let _localctx: FromSpecContext = new FromSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, CqlParser.RULE_fromSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1895;
			this.kwFrom();
			this.state = 1896;
			this.fromSpecElement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public fromSpecElement(): FromSpecElementContext {
		let _localctx: FromSpecElementContext = new FromSpecElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, CqlParser.RULE_fromSpecElement);
		try {
			this.state = 1903;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,145,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1898;
				this.table();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1899;
				this.keyspace();
				this.state = 1900;
				this.specialDot();
				this.state = 1901;
				this.table();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public orderSpec(): OrderSpecContext {
		let _localctx: OrderSpecContext = new OrderSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, CqlParser.RULE_orderSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1905;
			this.kwOrderBy();
			this.state = 1906;
			this.orderSpecElement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public orderSpecElement(): OrderSpecElementContext {
		let _localctx: OrderSpecElementContext = new OrderSpecElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, CqlParser.RULE_orderSpecElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1908;
			this.column();
			this.state = 1911;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_ASC:
				{
				this.state = 1909;
				this.kwAsc();
				}
				break;
			case CqlParser.K_DESC:
				{
				this.state = 1910;
				this.kwDesc();
				}
				break;
			case CqlParser.EOF:
			case CqlParser.SEMI:
			case CqlParser.MINUSMINUS:
			case CqlParser.K_ALLOW:
			case CqlParser.K_LIMIT:
				break;
			default:
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public whereSpec(): WhereSpecContext {
		let _localctx: WhereSpecContext = new WhereSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, CqlParser.RULE_whereSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1913;
			this.kwWhere();
			this.state = 1914;
			this.relationElements();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public selectElements(): SelectElementsContext {
		let _localctx: SelectElementsContext = new SelectElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, CqlParser.RULE_selectElements);
		let _la: number;
		try {
			this.state = 1926;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.STAR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1916;
				this.specialStar();
				}
				break;
			case CqlParser.DQUOTE:
			case CqlParser.OBJECT_NAME:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1917;
				this.selectElement();
				this.state = 1923;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===CqlParser.COMMA) {
					{
					{
					this.state = 1918;
					this.syntaxComma();
					this.state = 1919;
					this.selectElement();
					}
					}
					this.state = 1925;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public selectElement(): SelectElementContext {
		let _localctx: SelectElementContext = new SelectElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, CqlParser.RULE_selectElement);
		let _la: number;
		try {
			this.state = 1941;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,151,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1928;
				this.column();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1929;
				this.column();
				this.state = 1933;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CqlParser.K_AS) {
					{
					this.state = 1930;
					this.kwAs();
					this.state = 1931;
					this.match(CqlParser.OBJECT_NAME);
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1935;
				this.functionCall();
				this.state = 1939;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CqlParser.K_AS) {
					{
					this.state = 1936;
					this.kwAs();
					this.state = 1937;
					this.match(CqlParser.OBJECT_NAME);
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public relationElements(): RelationElementsContext {
		let _localctx: RelationElementsContext = new RelationElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, CqlParser.RULE_relationElements);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1943;
			this.relationElement();
			}
			this.state = 1949;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.K_AND) {
				{
				{
				this.state = 1944;
				this.kwAnd();
				this.state = 1945;
				this.relationElement();
				}
				}
				this.state = 1951;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public relationElement(): RelationElementContext {
		let _localctx: RelationElementContext = new RelationElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, CqlParser.RULE_relationElement);
		let _la: number;
		try {
			this.state = 1992;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,157,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1952;
				this.column();
				this.state = 1958;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CqlParser.OPERATOR_EQ:
					{
					this.state = 1953;
					this.syntaxOperatorEq();
					}
					break;
				case CqlParser.OPERATOR_LT:
					{
					this.state = 1954;
					this.syntaxOperatorLt();
					}
					break;
				case CqlParser.OPERATOR_GT:
					{
					this.state = 1955;
					this.syntaxOperatorGt();
					}
					break;
				case CqlParser.OPERATOR_LTE:
					{
					this.state = 1956;
					this.syntaxOperatorLte();
					}
					break;
				case CqlParser.OPERATOR_GTE:
					{
					this.state = 1957;
					this.syntaxOperatorGte();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1960;
				this.constant();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1962;
				this.functionCall();
				this.state = 1968;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CqlParser.OPERATOR_EQ:
					{
					this.state = 1963;
					this.syntaxOperatorEq();
					}
					break;
				case CqlParser.OPERATOR_LT:
					{
					this.state = 1964;
					this.syntaxOperatorLt();
					}
					break;
				case CqlParser.OPERATOR_GT:
					{
					this.state = 1965;
					this.syntaxOperatorGt();
					}
					break;
				case CqlParser.OPERATOR_LTE:
					{
					this.state = 1966;
					this.syntaxOperatorLte();
					}
					break;
				case CqlParser.OPERATOR_GTE:
					{
					this.state = 1967;
					this.syntaxOperatorGte();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1970;
				this.constant();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1972;
				this.functionCall();
				this.state = 1978;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CqlParser.OPERATOR_EQ:
					{
					this.state = 1973;
					this.syntaxOperatorEq();
					}
					break;
				case CqlParser.OPERATOR_LT:
					{
					this.state = 1974;
					this.syntaxOperatorLt();
					}
					break;
				case CqlParser.OPERATOR_GT:
					{
					this.state = 1975;
					this.syntaxOperatorGt();
					}
					break;
				case CqlParser.OPERATOR_LTE:
					{
					this.state = 1976;
					this.syntaxOperatorLte();
					}
					break;
				case CqlParser.OPERATOR_GTE:
					{
					this.state = 1977;
					this.syntaxOperatorGte();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1980;
				this.functionCall();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1982;
				this.column();
				this.state = 1983;
				this.kwIn();
				this.state = 1984;
				this.syntaxBracketLr();
				this.state = 1986;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CqlParser.K_FALSE || _la===CqlParser.K_NULL || _la===CqlParser.K_TRUE || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (CqlParser.STRING_LITERAL - 164)) | (1 << (CqlParser.DECIMAL_LITERAL - 164)) | (1 << (CqlParser.HEXADECIMAL_LITERAL - 164)) | (1 << (CqlParser.OBJECT_NAME - 164)) | (1 << (CqlParser.UUID - 164)))) !== 0)) {
					{
					this.state = 1985;
					this.functionArgs();
					}
				}

				this.state = 1988;
				this.syntaxBracketRr();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1990;
				this.relalationContainsKey();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1991;
				this.relalationContains();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public relalationContains(): RelalationContainsContext {
		let _localctx: RelalationContainsContext = new RelalationContainsContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, CqlParser.RULE_relalationContains);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1994;
			this.column();
			this.state = 1995;
			this.kwContains();
			this.state = 1996;
			this.constant();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public relalationContainsKey(): RelalationContainsKeyContext {
		let _localctx: RelalationContainsKeyContext = new RelalationContainsKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, CqlParser.RULE_relalationContainsKey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1998;
			this.column();
			{
			this.state = 1999;
			this.kwContainsKey();
			}
			this.state = 2000;
			this.constant();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, CqlParser.RULE_functionCall);
		let _la: number;
		try {
			this.state = 2012;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,159,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2002;
				this.match(CqlParser.OBJECT_NAME);
				this.state = 2003;
				this.match(CqlParser.LR_BRACKET);
				this.state = 2004;
				this.match(CqlParser.STAR);
				this.state = 2005;
				this.match(CqlParser.RR_BRACKET);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2006;
				this.match(CqlParser.OBJECT_NAME);
				this.state = 2007;
				this.match(CqlParser.LR_BRACKET);
				this.state = 2009;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===CqlParser.K_FALSE || _la===CqlParser.K_NULL || _la===CqlParser.K_TRUE || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (CqlParser.STRING_LITERAL - 164)) | (1 << (CqlParser.DECIMAL_LITERAL - 164)) | (1 << (CqlParser.HEXADECIMAL_LITERAL - 164)) | (1 << (CqlParser.OBJECT_NAME - 164)) | (1 << (CqlParser.UUID - 164)))) !== 0)) {
					{
					this.state = 2008;
					this.functionArgs();
					}
				}

				this.state = 2011;
				this.match(CqlParser.RR_BRACKET);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functionArgs(): FunctionArgsContext {
		let _localctx: FunctionArgsContext = new FunctionArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, CqlParser.RULE_functionArgs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2017;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,160,this._ctx) ) {
			case 1:
				{
				this.state = 2014;
				this.constant();
				}
				break;

			case 2:
				{
				this.state = 2015;
				this.match(CqlParser.OBJECT_NAME);
				}
				break;

			case 3:
				{
				this.state = 2016;
				this.functionCall();
				}
				break;
			}
			this.state = 2027;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 2019;
				this.syntaxComma();
				this.state = 2023;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,161,this._ctx) ) {
				case 1:
					{
					this.state = 2020;
					this.constant();
					}
					break;

				case 2:
					{
					this.state = 2021;
					this.match(CqlParser.OBJECT_NAME);
					}
					break;

				case 3:
					{
					this.state = 2022;
					this.functionCall();
					}
					break;
				}
				}
				}
				this.state = 2029;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public constant(): ConstantContext {
		let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, CqlParser.RULE_constant);
		try {
			this.state = 2036;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.UUID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2030;
				this.literalUuid();
				}
				break;
			case CqlParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2031;
				this.literalString();
				}
				break;
			case CqlParser.DECIMAL_LITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2032;
				this.literalDecimal();
				}
				break;
			case CqlParser.HEXADECIMAL_LITERAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2033;
				this.literalHexadecimal();
				}
				break;
			case CqlParser.K_FALSE:
			case CqlParser.K_TRUE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2034;
				this.literalBoolean();
				}
				break;
			case CqlParser.K_NULL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2035;
				this.kwNull();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public literalUuid(): LiteralUuidContext {
		let _localctx: LiteralUuidContext = new LiteralUuidContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, CqlParser.RULE_literalUuid);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2038;
			this.match(CqlParser.UUID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public literalDecimal(): LiteralDecimalContext {
		let _localctx: LiteralDecimalContext = new LiteralDecimalContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, CqlParser.RULE_literalDecimal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2040;
			this.match(CqlParser.DECIMAL_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public literalFloat(): LiteralFloatContext {
		let _localctx: LiteralFloatContext = new LiteralFloatContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, CqlParser.RULE_literalFloat);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2042;
			_la = this._input.LA(1);
			if ( !(_la===CqlParser.DECIMAL_LITERAL || _la===CqlParser.FLOAT_LITERAL) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public literalString(): LiteralStringContext {
		let _localctx: LiteralStringContext = new LiteralStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 294, CqlParser.RULE_literalString);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2044;
			this.match(CqlParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public literalBoolean(): LiteralBooleanContext {
		let _localctx: LiteralBooleanContext = new LiteralBooleanContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, CqlParser.RULE_literalBoolean);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2046;
			_la = this._input.LA(1);
			if ( !(_la===CqlParser.K_FALSE || _la===CqlParser.K_TRUE) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public literalHexadecimal(): LiteralHexadecimalContext {
		let _localctx: LiteralHexadecimalContext = new LiteralHexadecimalContext(this._ctx, this.state);
		this.enterRule(_localctx, 298, CqlParser.RULE_literalHexadecimal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2048;
			this.match(CqlParser.HEXADECIMAL_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public keyspace(): KeyspaceContext {
		let _localctx: KeyspaceContext = new KeyspaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 300, CqlParser.RULE_keyspace);
		try {
			this.state = 2054;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.OBJECT_NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2050;
				this.match(CqlParser.OBJECT_NAME);
				}
				break;
			case CqlParser.DQUOTE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2051;
				this.match(CqlParser.DQUOTE);
				this.state = 2052;
				this.match(CqlParser.OBJECT_NAME);
				this.state = 2053;
				this.match(CqlParser.DQUOTE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public table(): TableContext {
		let _localctx: TableContext = new TableContext(this._ctx, this.state);
		this.enterRule(_localctx, 302, CqlParser.RULE_table);
		try {
			this.state = 2060;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.OBJECT_NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2056;
				this.match(CqlParser.OBJECT_NAME);
				}
				break;
			case CqlParser.DQUOTE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2057;
				this.match(CqlParser.DQUOTE);
				this.state = 2058;
				this.match(CqlParser.OBJECT_NAME);
				this.state = 2059;
				this.match(CqlParser.DQUOTE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public column(): ColumnContext {
		let _localctx: ColumnContext = new ColumnContext(this._ctx, this.state);
		this.enterRule(_localctx, 304, CqlParser.RULE_column);
		try {
			this.state = 2066;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.OBJECT_NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2062;
				this.match(CqlParser.OBJECT_NAME);
				}
				break;
			case CqlParser.DQUOTE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2063;
				this.match(CqlParser.DQUOTE);
				this.state = 2064;
				this.match(CqlParser.OBJECT_NAME);
				this.state = 2065;
				this.match(CqlParser.DQUOTE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataType(): DataTypeContext {
		let _localctx: DataTypeContext = new DataTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 306, CqlParser.RULE_dataType);
		try {
			this.state = 2094;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_ASCII:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2068;
				this.dataTypeAscii();
				}
				break;
			case CqlParser.K_BIGINT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2069;
				this.dataTypeBigint();
				}
				break;
			case CqlParser.K_BLOB:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2070;
				this.dataTypeBlob();
				}
				break;
			case CqlParser.K_BOOLEAN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2071;
				this.dataTypeBoolean();
				}
				break;
			case CqlParser.K_COUNTER:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2072;
				this.dataTypeCounter();
				}
				break;
			case CqlParser.K_DATE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2073;
				this.dataTypeDate();
				}
				break;
			case CqlParser.K_DECIMAL:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2074;
				this.dataTypeDecimal();
				}
				break;
			case CqlParser.K_DOUBLE:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2075;
				this.dataTypeDouble();
				}
				break;
			case CqlParser.K_FLOAT:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2076;
				this.dataTypeFloat();
				}
				break;
			case CqlParser.K_FROZEN:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2077;
				this.dataTypeFrozen();
				}
				break;
			case CqlParser.K_INET:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 2078;
				this.dataTypeInet();
				}
				break;
			case CqlParser.K_INT:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 2079;
				this.dataTypeInt();
				}
				break;
			case CqlParser.K_LIST:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 2080;
				this.dataTypeList();
				}
				break;
			case CqlParser.K_MAP:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 2081;
				this.dataTypeMap();
				}
				break;
			case CqlParser.K_SET:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 2082;
				this.dataTypeSet();
				}
				break;
			case CqlParser.K_SMALLINT:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 2083;
				this.dataTypeSmallInt();
				}
				break;
			case CqlParser.K_TEXT:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 2084;
				this.dataTypeText();
				}
				break;
			case CqlParser.K_TIME:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 2085;
				this.dataTypeTime();
				}
				break;
			case CqlParser.K_TIMEUUID:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 2086;
				this.dataTypeTimeUuid();
				}
				break;
			case CqlParser.K_TIMESTAMP:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 2087;
				this.dataTypeTimestamp();
				}
				break;
			case CqlParser.K_TINYINT:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 2088;
				this.dataTypeTinyInt();
				}
				break;
			case CqlParser.K_TUPLE:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 2089;
				this.dataTypeTuple();
				}
				break;
			case CqlParser.OBJECT_NAME:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 2090;
				this.dataTypeUserDefined();
				}
				break;
			case CqlParser.K_UUID:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 2091;
				this.dataTypeUuid();
				}
				break;
			case CqlParser.K_VARCHAR:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 2092;
				this.dataTypeVarChar();
				}
				break;
			case CqlParser.K_VARINT:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 2093;
				this.dataTypeVarInt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public orderDirection(): OrderDirectionContext {
		let _localctx: OrderDirectionContext = new OrderDirectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 308, CqlParser.RULE_orderDirection);
		try {
			this.state = 2098;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CqlParser.K_ASC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2096;
				this.kwAsc();
				}
				break;
			case CqlParser.K_DESC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2097;
				this.kwDesc();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public role(): RoleContext {
		let _localctx: RoleContext = new RoleContext(this._ctx, this.state);
		this.enterRule(_localctx, 310, CqlParser.RULE_role);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2100;
			this.match(CqlParser.OBJECT_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public trigger(): TriggerContext {
		let _localctx: TriggerContext = new TriggerContext(this._ctx, this.state);
		this.enterRule(_localctx, 312, CqlParser.RULE_trigger);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2102;
			this.match(CqlParser.OBJECT_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public triggerClass(): TriggerClassContext {
		let _localctx: TriggerClassContext = new TriggerClassContext(this._ctx, this.state);
		this.enterRule(_localctx, 314, CqlParser.RULE_triggerClass);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2104;
			this.literalString();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public materializedView(): MaterializedViewContext {
		let _localctx: MaterializedViewContext = new MaterializedViewContext(this._ctx, this.state);
		this.enterRule(_localctx, 316, CqlParser.RULE_materializedView);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2106;
			this.match(CqlParser.OBJECT_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 318, CqlParser.RULE_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2108;
			this.match(CqlParser.OBJECT_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public aggregate(): AggregateContext {
		let _localctx: AggregateContext = new AggregateContext(this._ctx, this.state);
		this.enterRule(_localctx, 320, CqlParser.RULE_aggregate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2110;
			this.match(CqlParser.OBJECT_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public function(): FunctionContext {
		let _localctx: FunctionContext = new FunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 322, CqlParser.RULE_function);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2112;
			this.match(CqlParser.OBJECT_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public language(): LanguageContext {
		let _localctx: LanguageContext = new LanguageContext(this._ctx, this.state);
		this.enterRule(_localctx, 324, CqlParser.RULE_language);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2114;
			this.match(CqlParser.OBJECT_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public user(): UserContext {
		let _localctx: UserContext = new UserContext(this._ctx, this.state);
		this.enterRule(_localctx, 326, CqlParser.RULE_user);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2116;
			this.match(CqlParser.OBJECT_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public password(): PasswordContext {
		let _localctx: PasswordContext = new PasswordContext(this._ctx, this.state);
		this.enterRule(_localctx, 328, CqlParser.RULE_password);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2118;
			this.literalString();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public hashKey(): HashKeyContext {
		let _localctx: HashKeyContext = new HashKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 330, CqlParser.RULE_hashKey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2120;
			this.match(CqlParser.OBJECT_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public param(): ParamContext {
		let _localctx: ParamContext = new ParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 332, CqlParser.RULE_param);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2122;
			this.paramName();
			this.state = 2123;
			this.dataType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public paramName(): ParamNameContext {
		let _localctx: ParamNameContext = new ParamNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 334, CqlParser.RULE_paramName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2125;
			this.match(CqlParser.OBJECT_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwAdd(): KwAddContext {
		let _localctx: KwAddContext = new KwAddContext(this._ctx, this.state);
		this.enterRule(_localctx, 336, CqlParser.RULE_kwAdd);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2127;
			this.match(CqlParser.K_ADD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwAggregate(): KwAggregateContext {
		let _localctx: KwAggregateContext = new KwAggregateContext(this._ctx, this.state);
		this.enterRule(_localctx, 338, CqlParser.RULE_kwAggregate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2129;
			this.match(CqlParser.K_AGGREGATE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwAll(): KwAllContext {
		let _localctx: KwAllContext = new KwAllContext(this._ctx, this.state);
		this.enterRule(_localctx, 340, CqlParser.RULE_kwAll);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2131;
			this.match(CqlParser.K_ALL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwAllPermissions(): KwAllPermissionsContext {
		let _localctx: KwAllPermissionsContext = new KwAllPermissionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 342, CqlParser.RULE_kwAllPermissions);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2133;
			this.match(CqlParser.K_ALL);
			this.state = 2134;
			this.match(CqlParser.K_PERMISSIONS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwAllow(): KwAllowContext {
		let _localctx: KwAllowContext = new KwAllowContext(this._ctx, this.state);
		this.enterRule(_localctx, 344, CqlParser.RULE_kwAllow);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2136;
			this.match(CqlParser.K_ALLOW);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwAllowFiltering(): KwAllowFilteringContext {
		let _localctx: KwAllowFilteringContext = new KwAllowFilteringContext(this._ctx, this.state);
		this.enterRule(_localctx, 346, CqlParser.RULE_kwAllowFiltering);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2138;
			this.match(CqlParser.K_ALLOW);
			this.state = 2139;
			this.match(CqlParser.K_FILTERING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwAlter(): KwAlterContext {
		let _localctx: KwAlterContext = new KwAlterContext(this._ctx, this.state);
		this.enterRule(_localctx, 348, CqlParser.RULE_kwAlter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2141;
			this.match(CqlParser.K_ALTER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwAnd(): KwAndContext {
		let _localctx: KwAndContext = new KwAndContext(this._ctx, this.state);
		this.enterRule(_localctx, 350, CqlParser.RULE_kwAnd);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2143;
			this.match(CqlParser.K_AND);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwApply(): KwApplyContext {
		let _localctx: KwApplyContext = new KwApplyContext(this._ctx, this.state);
		this.enterRule(_localctx, 352, CqlParser.RULE_kwApply);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2145;
			this.match(CqlParser.K_APPLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwAs(): KwAsContext {
		let _localctx: KwAsContext = new KwAsContext(this._ctx, this.state);
		this.enterRule(_localctx, 354, CqlParser.RULE_kwAs);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2147;
			this.match(CqlParser.K_AS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwAsc(): KwAscContext {
		let _localctx: KwAscContext = new KwAscContext(this._ctx, this.state);
		this.enterRule(_localctx, 356, CqlParser.RULE_kwAsc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2149;
			this.match(CqlParser.K_ASC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwAuthorize(): KwAuthorizeContext {
		let _localctx: KwAuthorizeContext = new KwAuthorizeContext(this._ctx, this.state);
		this.enterRule(_localctx, 358, CqlParser.RULE_kwAuthorize);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2151;
			this.match(CqlParser.K_AUTHORIZE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwBatch(): KwBatchContext {
		let _localctx: KwBatchContext = new KwBatchContext(this._ctx, this.state);
		this.enterRule(_localctx, 360, CqlParser.RULE_kwBatch);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2153;
			this.match(CqlParser.K_BATCH);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwBegin(): KwBeginContext {
		let _localctx: KwBeginContext = new KwBeginContext(this._ctx, this.state);
		this.enterRule(_localctx, 362, CqlParser.RULE_kwBegin);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2155;
			this.match(CqlParser.K_BEGIN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwBy(): KwByContext {
		let _localctx: KwByContext = new KwByContext(this._ctx, this.state);
		this.enterRule(_localctx, 364, CqlParser.RULE_kwBy);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2157;
			this.match(CqlParser.K_BY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwCalled(): KwCalledContext {
		let _localctx: KwCalledContext = new KwCalledContext(this._ctx, this.state);
		this.enterRule(_localctx, 366, CqlParser.RULE_kwCalled);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2159;
			this.match(CqlParser.K_CALLED);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwClustering(): KwClusteringContext {
		let _localctx: KwClusteringContext = new KwClusteringContext(this._ctx, this.state);
		this.enterRule(_localctx, 368, CqlParser.RULE_kwClustering);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2161;
			this.match(CqlParser.K_CLUSTERING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwCompact(): KwCompactContext {
		let _localctx: KwCompactContext = new KwCompactContext(this._ctx, this.state);
		this.enterRule(_localctx, 370, CqlParser.RULE_kwCompact);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2163;
			this.match(CqlParser.K_COMPACT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwContains(): KwContainsContext {
		let _localctx: KwContainsContext = new KwContainsContext(this._ctx, this.state);
		this.enterRule(_localctx, 372, CqlParser.RULE_kwContains);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2165;
			this.match(CqlParser.K_CONTAINS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwContainsKey(): KwContainsKeyContext {
		let _localctx: KwContainsKeyContext = new KwContainsKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 374, CqlParser.RULE_kwContainsKey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2167;
			this.match(CqlParser.K_CONTAINS);
			this.state = 2168;
			this.match(CqlParser.K_KEY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwCreate(): KwCreateContext {
		let _localctx: KwCreateContext = new KwCreateContext(this._ctx, this.state);
		this.enterRule(_localctx, 376, CqlParser.RULE_kwCreate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2170;
			this.match(CqlParser.K_CREATE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwDelete(): KwDeleteContext {
		let _localctx: KwDeleteContext = new KwDeleteContext(this._ctx, this.state);
		this.enterRule(_localctx, 378, CqlParser.RULE_kwDelete);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2172;
			this.match(CqlParser.K_DELETE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwDesc(): KwDescContext {
		let _localctx: KwDescContext = new KwDescContext(this._ctx, this.state);
		this.enterRule(_localctx, 380, CqlParser.RULE_kwDesc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2174;
			this.match(CqlParser.K_DESC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwDescibe(): KwDescibeContext {
		let _localctx: KwDescibeContext = new KwDescibeContext(this._ctx, this.state);
		this.enterRule(_localctx, 382, CqlParser.RULE_kwDescibe);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2176;
			this.match(CqlParser.K_DESCRIBE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwDistinct(): KwDistinctContext {
		let _localctx: KwDistinctContext = new KwDistinctContext(this._ctx, this.state);
		this.enterRule(_localctx, 384, CqlParser.RULE_kwDistinct);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2178;
			this.match(CqlParser.K_DISTINCT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwDrop(): KwDropContext {
		let _localctx: KwDropContext = new KwDropContext(this._ctx, this.state);
		this.enterRule(_localctx, 386, CqlParser.RULE_kwDrop);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2180;
			this.match(CqlParser.K_DROP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwDurableWrites(): KwDurableWritesContext {
		let _localctx: KwDurableWritesContext = new KwDurableWritesContext(this._ctx, this.state);
		this.enterRule(_localctx, 388, CqlParser.RULE_kwDurableWrites);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2182;
			this.match(CqlParser.K_DURABLE_WRITES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwEntries(): KwEntriesContext {
		let _localctx: KwEntriesContext = new KwEntriesContext(this._ctx, this.state);
		this.enterRule(_localctx, 390, CqlParser.RULE_kwEntries);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2184;
			this.match(CqlParser.K_ENTRIES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwExecute(): KwExecuteContext {
		let _localctx: KwExecuteContext = new KwExecuteContext(this._ctx, this.state);
		this.enterRule(_localctx, 392, CqlParser.RULE_kwExecute);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2186;
			this.match(CqlParser.K_EXECUTE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwExists(): KwExistsContext {
		let _localctx: KwExistsContext = new KwExistsContext(this._ctx, this.state);
		this.enterRule(_localctx, 394, CqlParser.RULE_kwExists);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2188;
			this.match(CqlParser.K_EXISTS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwFiltering(): KwFilteringContext {
		let _localctx: KwFilteringContext = new KwFilteringContext(this._ctx, this.state);
		this.enterRule(_localctx, 396, CqlParser.RULE_kwFiltering);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2190;
			this.match(CqlParser.K_FILTERING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwFinalfunc(): KwFinalfuncContext {
		let _localctx: KwFinalfuncContext = new KwFinalfuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 398, CqlParser.RULE_kwFinalfunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2192;
			this.match(CqlParser.K_FINALFUNC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwFrom(): KwFromContext {
		let _localctx: KwFromContext = new KwFromContext(this._ctx, this.state);
		this.enterRule(_localctx, 400, CqlParser.RULE_kwFrom);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2194;
			this.match(CqlParser.K_FROM);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwFull(): KwFullContext {
		let _localctx: KwFullContext = new KwFullContext(this._ctx, this.state);
		this.enterRule(_localctx, 402, CqlParser.RULE_kwFull);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2196;
			this.match(CqlParser.K_FULL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwFunction(): KwFunctionContext {
		let _localctx: KwFunctionContext = new KwFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 404, CqlParser.RULE_kwFunction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2198;
			this.match(CqlParser.K_FUNCTION);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwFunctions(): KwFunctionsContext {
		let _localctx: KwFunctionsContext = new KwFunctionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 406, CqlParser.RULE_kwFunctions);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2200;
			this.match(CqlParser.K_FUNCTIONS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwGrant(): KwGrantContext {
		let _localctx: KwGrantContext = new KwGrantContext(this._ctx, this.state);
		this.enterRule(_localctx, 408, CqlParser.RULE_kwGrant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2202;
			this.match(CqlParser.K_GRANT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwIf(): KwIfContext {
		let _localctx: KwIfContext = new KwIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 410, CqlParser.RULE_kwIf);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2204;
			this.match(CqlParser.K_IF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwIn(): KwInContext {
		let _localctx: KwInContext = new KwInContext(this._ctx, this.state);
		this.enterRule(_localctx, 412, CqlParser.RULE_kwIn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2206;
			this.match(CqlParser.K_IN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwIndex(): KwIndexContext {
		let _localctx: KwIndexContext = new KwIndexContext(this._ctx, this.state);
		this.enterRule(_localctx, 414, CqlParser.RULE_kwIndex);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2208;
			this.match(CqlParser.K_INDEX);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwInitcond(): KwInitcondContext {
		let _localctx: KwInitcondContext = new KwInitcondContext(this._ctx, this.state);
		this.enterRule(_localctx, 416, CqlParser.RULE_kwInitcond);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2210;
			this.match(CqlParser.K_INITCOND);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwInput(): KwInputContext {
		let _localctx: KwInputContext = new KwInputContext(this._ctx, this.state);
		this.enterRule(_localctx, 418, CqlParser.RULE_kwInput);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2212;
			this.match(CqlParser.K_INPUT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwInsert(): KwInsertContext {
		let _localctx: KwInsertContext = new KwInsertContext(this._ctx, this.state);
		this.enterRule(_localctx, 420, CqlParser.RULE_kwInsert);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2214;
			this.match(CqlParser.K_INSERT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwInto(): KwIntoContext {
		let _localctx: KwIntoContext = new KwIntoContext(this._ctx, this.state);
		this.enterRule(_localctx, 422, CqlParser.RULE_kwInto);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2216;
			this.match(CqlParser.K_INTO);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwIs(): KwIsContext {
		let _localctx: KwIsContext = new KwIsContext(this._ctx, this.state);
		this.enterRule(_localctx, 424, CqlParser.RULE_kwIs);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2218;
			this.match(CqlParser.K_IS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwKey(): KwKeyContext {
		let _localctx: KwKeyContext = new KwKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 426, CqlParser.RULE_kwKey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2220;
			this.match(CqlParser.K_KEY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwKeys(): KwKeysContext {
		let _localctx: KwKeysContext = new KwKeysContext(this._ctx, this.state);
		this.enterRule(_localctx, 428, CqlParser.RULE_kwKeys);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2222;
			this.match(CqlParser.K_KEYS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwKeyspace(): KwKeyspaceContext {
		let _localctx: KwKeyspaceContext = new KwKeyspaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 430, CqlParser.RULE_kwKeyspace);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2224;
			this.match(CqlParser.K_KEYSPACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwKeyspaces(): KwKeyspacesContext {
		let _localctx: KwKeyspacesContext = new KwKeyspacesContext(this._ctx, this.state);
		this.enterRule(_localctx, 432, CqlParser.RULE_kwKeyspaces);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2226;
			this.match(CqlParser.K_KEYSPACES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwLanguage(): KwLanguageContext {
		let _localctx: KwLanguageContext = new KwLanguageContext(this._ctx, this.state);
		this.enterRule(_localctx, 434, CqlParser.RULE_kwLanguage);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2228;
			this.match(CqlParser.K_LANGUAGE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwLimit(): KwLimitContext {
		let _localctx: KwLimitContext = new KwLimitContext(this._ctx, this.state);
		this.enterRule(_localctx, 436, CqlParser.RULE_kwLimit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2230;
			this.match(CqlParser.K_LIMIT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwList(): KwListContext {
		let _localctx: KwListContext = new KwListContext(this._ctx, this.state);
		this.enterRule(_localctx, 438, CqlParser.RULE_kwList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2232;
			this.match(CqlParser.K_LIST);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwLogged(): KwLoggedContext {
		let _localctx: KwLoggedContext = new KwLoggedContext(this._ctx, this.state);
		this.enterRule(_localctx, 440, CqlParser.RULE_kwLogged);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2234;
			this.match(CqlParser.K_LOGGED);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwLogin(): KwLoginContext {
		let _localctx: KwLoginContext = new KwLoginContext(this._ctx, this.state);
		this.enterRule(_localctx, 442, CqlParser.RULE_kwLogin);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2236;
			this.match(CqlParser.K_LOGIN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwMaterialized(): KwMaterializedContext {
		let _localctx: KwMaterializedContext = new KwMaterializedContext(this._ctx, this.state);
		this.enterRule(_localctx, 444, CqlParser.RULE_kwMaterialized);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2238;
			this.match(CqlParser.K_MATERIALIZED);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwModify(): KwModifyContext {
		let _localctx: KwModifyContext = new KwModifyContext(this._ctx, this.state);
		this.enterRule(_localctx, 446, CqlParser.RULE_kwModify);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2240;
			this.match(CqlParser.K_MODIFY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwNosuperuser(): KwNosuperuserContext {
		let _localctx: KwNosuperuserContext = new KwNosuperuserContext(this._ctx, this.state);
		this.enterRule(_localctx, 448, CqlParser.RULE_kwNosuperuser);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2242;
			this.match(CqlParser.K_NOSUPERUSER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwNorecursive(): KwNorecursiveContext {
		let _localctx: KwNorecursiveContext = new KwNorecursiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 450, CqlParser.RULE_kwNorecursive);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2244;
			this.match(CqlParser.K_NORECURSIVE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwNot(): KwNotContext {
		let _localctx: KwNotContext = new KwNotContext(this._ctx, this.state);
		this.enterRule(_localctx, 452, CqlParser.RULE_kwNot);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2246;
			this.match(CqlParser.K_NOT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwNull(): KwNullContext {
		let _localctx: KwNullContext = new KwNullContext(this._ctx, this.state);
		this.enterRule(_localctx, 454, CqlParser.RULE_kwNull);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2248;
			this.match(CqlParser.K_NULL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwOf(): KwOfContext {
		let _localctx: KwOfContext = new KwOfContext(this._ctx, this.state);
		this.enterRule(_localctx, 456, CqlParser.RULE_kwOf);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2250;
			this.match(CqlParser.K_OF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwOn(): KwOnContext {
		let _localctx: KwOnContext = new KwOnContext(this._ctx, this.state);
		this.enterRule(_localctx, 458, CqlParser.RULE_kwOn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2252;
			this.match(CqlParser.K_ON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwOptions(): KwOptionsContext {
		let _localctx: KwOptionsContext = new KwOptionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 460, CqlParser.RULE_kwOptions);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2254;
			this.match(CqlParser.K_OPTIONS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwOr(): KwOrContext {
		let _localctx: KwOrContext = new KwOrContext(this._ctx, this.state);
		this.enterRule(_localctx, 462, CqlParser.RULE_kwOr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2256;
			this.match(CqlParser.K_OR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwOrder(): KwOrderContext {
		let _localctx: KwOrderContext = new KwOrderContext(this._ctx, this.state);
		this.enterRule(_localctx, 464, CqlParser.RULE_kwOrder);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2258;
			this.match(CqlParser.K_ORDER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwOrderBy(): KwOrderByContext {
		let _localctx: KwOrderByContext = new KwOrderByContext(this._ctx, this.state);
		this.enterRule(_localctx, 466, CqlParser.RULE_kwOrderBy);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2260;
			this.match(CqlParser.K_ORDER);
			this.state = 2261;
			this.match(CqlParser.K_BY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwPassword(): KwPasswordContext {
		let _localctx: KwPasswordContext = new KwPasswordContext(this._ctx, this.state);
		this.enterRule(_localctx, 468, CqlParser.RULE_kwPassword);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2263;
			this.match(CqlParser.K_PASSWORD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwPrimary(): KwPrimaryContext {
		let _localctx: KwPrimaryContext = new KwPrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 470, CqlParser.RULE_kwPrimary);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2265;
			this.match(CqlParser.K_PRIMARY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwRename(): KwRenameContext {
		let _localctx: KwRenameContext = new KwRenameContext(this._ctx, this.state);
		this.enterRule(_localctx, 472, CqlParser.RULE_kwRename);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2267;
			this.match(CqlParser.K_RENAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwReplace(): KwReplaceContext {
		let _localctx: KwReplaceContext = new KwReplaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 474, CqlParser.RULE_kwReplace);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2269;
			this.match(CqlParser.K_REPLACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwReplication(): KwReplicationContext {
		let _localctx: KwReplicationContext = new KwReplicationContext(this._ctx, this.state);
		this.enterRule(_localctx, 476, CqlParser.RULE_kwReplication);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2271;
			this.match(CqlParser.K_REPLICATION);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwReturns(): KwReturnsContext {
		let _localctx: KwReturnsContext = new KwReturnsContext(this._ctx, this.state);
		this.enterRule(_localctx, 478, CqlParser.RULE_kwReturns);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2273;
			this.match(CqlParser.K_RETURNS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwRole(): KwRoleContext {
		let _localctx: KwRoleContext = new KwRoleContext(this._ctx, this.state);
		this.enterRule(_localctx, 480, CqlParser.RULE_kwRole);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2275;
			this.match(CqlParser.K_ROLE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwRoles(): KwRolesContext {
		let _localctx: KwRolesContext = new KwRolesContext(this._ctx, this.state);
		this.enterRule(_localctx, 482, CqlParser.RULE_kwRoles);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2277;
			this.match(CqlParser.K_ROLES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwSelect(): KwSelectContext {
		let _localctx: KwSelectContext = new KwSelectContext(this._ctx, this.state);
		this.enterRule(_localctx, 484, CqlParser.RULE_kwSelect);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2279;
			this.match(CqlParser.K_SELECT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwSet(): KwSetContext {
		let _localctx: KwSetContext = new KwSetContext(this._ctx, this.state);
		this.enterRule(_localctx, 486, CqlParser.RULE_kwSet);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2281;
			this.match(CqlParser.K_SET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwSfunc(): KwSfuncContext {
		let _localctx: KwSfuncContext = new KwSfuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 488, CqlParser.RULE_kwSfunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2283;
			this.match(CqlParser.K_SFUNC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwStatic(): KwStaticContext {
		let _localctx: KwStaticContext = new KwStaticContext(this._ctx, this.state);
		this.enterRule(_localctx, 490, CqlParser.RULE_kwStatic);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2285;
			this.match(CqlParser.K_STATIC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwStorage(): KwStorageContext {
		let _localctx: KwStorageContext = new KwStorageContext(this._ctx, this.state);
		this.enterRule(_localctx, 492, CqlParser.RULE_kwStorage);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2287;
			this.match(CqlParser.K_STORAGE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwStype(): KwStypeContext {
		let _localctx: KwStypeContext = new KwStypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 494, CqlParser.RULE_kwStype);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2289;
			this.match(CqlParser.K_STYPE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwSuperuser(): KwSuperuserContext {
		let _localctx: KwSuperuserContext = new KwSuperuserContext(this._ctx, this.state);
		this.enterRule(_localctx, 496, CqlParser.RULE_kwSuperuser);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2291;
			this.match(CqlParser.K_SUPERUSER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwTable(): KwTableContext {
		let _localctx: KwTableContext = new KwTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 498, CqlParser.RULE_kwTable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2293;
			this.match(CqlParser.K_TABLE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwTimestamp(): KwTimestampContext {
		let _localctx: KwTimestampContext = new KwTimestampContext(this._ctx, this.state);
		this.enterRule(_localctx, 500, CqlParser.RULE_kwTimestamp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2295;
			this.match(CqlParser.K_TIMESTAMP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwTo(): KwToContext {
		let _localctx: KwToContext = new KwToContext(this._ctx, this.state);
		this.enterRule(_localctx, 502, CqlParser.RULE_kwTo);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2297;
			this.match(CqlParser.K_TO);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwTrigger(): KwTriggerContext {
		let _localctx: KwTriggerContext = new KwTriggerContext(this._ctx, this.state);
		this.enterRule(_localctx, 504, CqlParser.RULE_kwTrigger);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2299;
			this.match(CqlParser.K_TRIGGER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwTruncate(): KwTruncateContext {
		let _localctx: KwTruncateContext = new KwTruncateContext(this._ctx, this.state);
		this.enterRule(_localctx, 506, CqlParser.RULE_kwTruncate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2301;
			this.match(CqlParser.K_TRUNCATE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwTtl(): KwTtlContext {
		let _localctx: KwTtlContext = new KwTtlContext(this._ctx, this.state);
		this.enterRule(_localctx, 508, CqlParser.RULE_kwTtl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2303;
			this.match(CqlParser.K_TTL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwType(): KwTypeContext {
		let _localctx: KwTypeContext = new KwTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 510, CqlParser.RULE_kwType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2305;
			this.match(CqlParser.K_TYPE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwUnlogged(): KwUnloggedContext {
		let _localctx: KwUnloggedContext = new KwUnloggedContext(this._ctx, this.state);
		this.enterRule(_localctx, 512, CqlParser.RULE_kwUnlogged);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2307;
			this.match(CqlParser.K_UNLOGGED);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwUpdate(): KwUpdateContext {
		let _localctx: KwUpdateContext = new KwUpdateContext(this._ctx, this.state);
		this.enterRule(_localctx, 514, CqlParser.RULE_kwUpdate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2309;
			this.match(CqlParser.K_UPDATE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwUse(): KwUseContext {
		let _localctx: KwUseContext = new KwUseContext(this._ctx, this.state);
		this.enterRule(_localctx, 516, CqlParser.RULE_kwUse);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2311;
			this.match(CqlParser.K_USE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwUser(): KwUserContext {
		let _localctx: KwUserContext = new KwUserContext(this._ctx, this.state);
		this.enterRule(_localctx, 518, CqlParser.RULE_kwUser);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2313;
			this.match(CqlParser.K_USER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwUsers(): KwUsersContext {
		let _localctx: KwUsersContext = new KwUsersContext(this._ctx, this.state);
		this.enterRule(_localctx, 520, CqlParser.RULE_kwUsers);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2315;
			this.match(CqlParser.K_USERS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwUsing(): KwUsingContext {
		let _localctx: KwUsingContext = new KwUsingContext(this._ctx, this.state);
		this.enterRule(_localctx, 522, CqlParser.RULE_kwUsing);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2317;
			this.match(CqlParser.K_USING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwValues(): KwValuesContext {
		let _localctx: KwValuesContext = new KwValuesContext(this._ctx, this.state);
		this.enterRule(_localctx, 524, CqlParser.RULE_kwValues);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2319;
			this.match(CqlParser.K_VALUES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwView(): KwViewContext {
		let _localctx: KwViewContext = new KwViewContext(this._ctx, this.state);
		this.enterRule(_localctx, 526, CqlParser.RULE_kwView);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2321;
			this.match(CqlParser.K_VIEW);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwWhere(): KwWhereContext {
		let _localctx: KwWhereContext = new KwWhereContext(this._ctx, this.state);
		this.enterRule(_localctx, 528, CqlParser.RULE_kwWhere);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2323;
			this.match(CqlParser.K_WHERE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwWith(): KwWithContext {
		let _localctx: KwWithContext = new KwWithContext(this._ctx, this.state);
		this.enterRule(_localctx, 530, CqlParser.RULE_kwWith);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2325;
			this.match(CqlParser.K_WITH);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public kwRevoke(): KwRevokeContext {
		let _localctx: KwRevokeContext = new KwRevokeContext(this._ctx, this.state);
		this.enterRule(_localctx, 532, CqlParser.RULE_kwRevoke);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2327;
			this.match(CqlParser.K_REVOKE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeAscii(): DataTypeAsciiContext {
		let _localctx: DataTypeAsciiContext = new DataTypeAsciiContext(this._ctx, this.state);
		this.enterRule(_localctx, 534, CqlParser.RULE_dataTypeAscii);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2329;
			this.match(CqlParser.K_ASCII);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeBigint(): DataTypeBigintContext {
		let _localctx: DataTypeBigintContext = new DataTypeBigintContext(this._ctx, this.state);
		this.enterRule(_localctx, 536, CqlParser.RULE_dataTypeBigint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2331;
			this.match(CqlParser.K_BIGINT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeBlob(): DataTypeBlobContext {
		let _localctx: DataTypeBlobContext = new DataTypeBlobContext(this._ctx, this.state);
		this.enterRule(_localctx, 538, CqlParser.RULE_dataTypeBlob);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2333;
			this.match(CqlParser.K_BLOB);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeBoolean(): DataTypeBooleanContext {
		let _localctx: DataTypeBooleanContext = new DataTypeBooleanContext(this._ctx, this.state);
		this.enterRule(_localctx, 540, CqlParser.RULE_dataTypeBoolean);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2335;
			this.match(CqlParser.K_BOOLEAN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeCounter(): DataTypeCounterContext {
		let _localctx: DataTypeCounterContext = new DataTypeCounterContext(this._ctx, this.state);
		this.enterRule(_localctx, 542, CqlParser.RULE_dataTypeCounter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2337;
			this.match(CqlParser.K_COUNTER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeDate(): DataTypeDateContext {
		let _localctx: DataTypeDateContext = new DataTypeDateContext(this._ctx, this.state);
		this.enterRule(_localctx, 544, CqlParser.RULE_dataTypeDate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2339;
			this.match(CqlParser.K_DATE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeDecimal(): DataTypeDecimalContext {
		let _localctx: DataTypeDecimalContext = new DataTypeDecimalContext(this._ctx, this.state);
		this.enterRule(_localctx, 546, CqlParser.RULE_dataTypeDecimal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2341;
			this.match(CqlParser.K_DECIMAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeDouble(): DataTypeDoubleContext {
		let _localctx: DataTypeDoubleContext = new DataTypeDoubleContext(this._ctx, this.state);
		this.enterRule(_localctx, 548, CqlParser.RULE_dataTypeDouble);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2343;
			this.match(CqlParser.K_DOUBLE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeFloat(): DataTypeFloatContext {
		let _localctx: DataTypeFloatContext = new DataTypeFloatContext(this._ctx, this.state);
		this.enterRule(_localctx, 550, CqlParser.RULE_dataTypeFloat);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2345;
			this.match(CqlParser.K_FLOAT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeFrozen(): DataTypeFrozenContext {
		let _localctx: DataTypeFrozenContext = new DataTypeFrozenContext(this._ctx, this.state);
		this.enterRule(_localctx, 552, CqlParser.RULE_dataTypeFrozen);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2347;
			this.match(CqlParser.K_FROZEN);
			this.state = 2348;
			this.dataTypeFrozenSpec();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeInet(): DataTypeInetContext {
		let _localctx: DataTypeInetContext = new DataTypeInetContext(this._ctx, this.state);
		this.enterRule(_localctx, 554, CqlParser.RULE_dataTypeInet);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2350;
			this.match(CqlParser.K_INET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeInt(): DataTypeIntContext {
		let _localctx: DataTypeIntContext = new DataTypeIntContext(this._ctx, this.state);
		this.enterRule(_localctx, 556, CqlParser.RULE_dataTypeInt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2352;
			this.match(CqlParser.K_INT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeList(): DataTypeListContext {
		let _localctx: DataTypeListContext = new DataTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 558, CqlParser.RULE_dataTypeList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2354;
			this.match(CqlParser.K_LIST);
			this.state = 2355;
			this.dataTypeListSpec();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeMap(): DataTypeMapContext {
		let _localctx: DataTypeMapContext = new DataTypeMapContext(this._ctx, this.state);
		this.enterRule(_localctx, 560, CqlParser.RULE_dataTypeMap);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2357;
			this.match(CqlParser.K_MAP);
			this.state = 2358;
			this.dataTypeMapSpec();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeSmallInt(): DataTypeSmallIntContext {
		let _localctx: DataTypeSmallIntContext = new DataTypeSmallIntContext(this._ctx, this.state);
		this.enterRule(_localctx, 562, CqlParser.RULE_dataTypeSmallInt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2360;
			this.match(CqlParser.K_SMALLINT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeSet(): DataTypeSetContext {
		let _localctx: DataTypeSetContext = new DataTypeSetContext(this._ctx, this.state);
		this.enterRule(_localctx, 564, CqlParser.RULE_dataTypeSet);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2362;
			this.match(CqlParser.K_SET);
			this.state = 2363;
			this.dataTypeSetSpec();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeText(): DataTypeTextContext {
		let _localctx: DataTypeTextContext = new DataTypeTextContext(this._ctx, this.state);
		this.enterRule(_localctx, 566, CqlParser.RULE_dataTypeText);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2365;
			this.match(CqlParser.K_TEXT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeTime(): DataTypeTimeContext {
		let _localctx: DataTypeTimeContext = new DataTypeTimeContext(this._ctx, this.state);
		this.enterRule(_localctx, 568, CqlParser.RULE_dataTypeTime);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2367;
			this.match(CqlParser.K_TIME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeTimeUuid(): DataTypeTimeUuidContext {
		let _localctx: DataTypeTimeUuidContext = new DataTypeTimeUuidContext(this._ctx, this.state);
		this.enterRule(_localctx, 570, CqlParser.RULE_dataTypeTimeUuid);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2369;
			this.match(CqlParser.K_TIMEUUID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeTimestamp(): DataTypeTimestampContext {
		let _localctx: DataTypeTimestampContext = new DataTypeTimestampContext(this._ctx, this.state);
		this.enterRule(_localctx, 572, CqlParser.RULE_dataTypeTimestamp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2371;
			this.match(CqlParser.K_TIMESTAMP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeTinyInt(): DataTypeTinyIntContext {
		let _localctx: DataTypeTinyIntContext = new DataTypeTinyIntContext(this._ctx, this.state);
		this.enterRule(_localctx, 574, CqlParser.RULE_dataTypeTinyInt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2373;
			this.match(CqlParser.K_TINYINT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeTuple(): DataTypeTupleContext {
		let _localctx: DataTypeTupleContext = new DataTypeTupleContext(this._ctx, this.state);
		this.enterRule(_localctx, 576, CqlParser.RULE_dataTypeTuple);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2375;
			this.match(CqlParser.K_TUPLE);
			this.state = 2376;
			this.dataTypeTupleSpec();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeUserDefined(): DataTypeUserDefinedContext {
		let _localctx: DataTypeUserDefinedContext = new DataTypeUserDefinedContext(this._ctx, this.state);
		this.enterRule(_localctx, 578, CqlParser.RULE_dataTypeUserDefined);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2378;
			this.match(CqlParser.OBJECT_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeUuid(): DataTypeUuidContext {
		let _localctx: DataTypeUuidContext = new DataTypeUuidContext(this._ctx, this.state);
		this.enterRule(_localctx, 580, CqlParser.RULE_dataTypeUuid);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2380;
			this.match(CqlParser.K_UUID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeVarChar(): DataTypeVarCharContext {
		let _localctx: DataTypeVarCharContext = new DataTypeVarCharContext(this._ctx, this.state);
		this.enterRule(_localctx, 582, CqlParser.RULE_dataTypeVarChar);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2382;
			this.match(CqlParser.K_VARCHAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeVarInt(): DataTypeVarIntContext {
		let _localctx: DataTypeVarIntContext = new DataTypeVarIntContext(this._ctx, this.state);
		this.enterRule(_localctx, 584, CqlParser.RULE_dataTypeVarInt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2384;
			this.match(CqlParser.K_VARINT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeTupleSpec(): DataTypeTupleSpecContext {
		let _localctx: DataTypeTupleSpecContext = new DataTypeTupleSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 586, CqlParser.RULE_dataTypeTupleSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2386;
			this.syntaxBracketLa();
			this.state = 2387;
			this.dataType();
			this.state = 2393;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===CqlParser.COMMA) {
				{
				{
				this.state = 2388;
				this.syntaxComma();
				this.state = 2389;
				this.dataType();
				}
				}
				this.state = 2395;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2396;
			this.syntaxBracketRa();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeMapSpec(): DataTypeMapSpecContext {
		let _localctx: DataTypeMapSpecContext = new DataTypeMapSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 588, CqlParser.RULE_dataTypeMapSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2398;
			this.syntaxBracketLa();
			this.state = 2399;
			this.dataType();
			this.state = 2400;
			this.syntaxComma();
			this.state = 2401;
			this.dataType();
			this.state = 2402;
			this.syntaxBracketRa();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeListSpec(): DataTypeListSpecContext {
		let _localctx: DataTypeListSpecContext = new DataTypeListSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 590, CqlParser.RULE_dataTypeListSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2404;
			this.syntaxBracketLa();
			this.state = 2405;
			this.dataType();
			this.state = 2406;
			this.syntaxBracketRa();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeSetSpec(): DataTypeSetSpecContext {
		let _localctx: DataTypeSetSpecContext = new DataTypeSetSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 592, CqlParser.RULE_dataTypeSetSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2408;
			this.syntaxBracketLa();
			this.state = 2409;
			this.dataType();
			this.state = 2410;
			this.syntaxBracketRa();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dataTypeFrozenSpec(): DataTypeFrozenSpecContext {
		let _localctx: DataTypeFrozenSpecContext = new DataTypeFrozenSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 594, CqlParser.RULE_dataTypeFrozenSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2412;
			this.syntaxBracketLa();
			this.state = 2413;
			this.dataType();
			this.state = 2414;
			this.syntaxBracketRa();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public specialStar(): SpecialStarContext {
		let _localctx: SpecialStarContext = new SpecialStarContext(this._ctx, this.state);
		this.enterRule(_localctx, 596, CqlParser.RULE_specialStar);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2416;
			this.match(CqlParser.STAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public specialDot(): SpecialDotContext {
		let _localctx: SpecialDotContext = new SpecialDotContext(this._ctx, this.state);
		this.enterRule(_localctx, 598, CqlParser.RULE_specialDot);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2418;
			this.match(CqlParser.DOT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public eof(): EofContext {
		let _localctx: EofContext = new EofContext(this._ctx, this.state);
		this.enterRule(_localctx, 600, CqlParser.RULE_eof);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2420;
			this.match(CqlParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public syntaxBracketLr(): SyntaxBracketLrContext {
		let _localctx: SyntaxBracketLrContext = new SyntaxBracketLrContext(this._ctx, this.state);
		this.enterRule(_localctx, 602, CqlParser.RULE_syntaxBracketLr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2422;
			this.match(CqlParser.LR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public syntaxBracketRr(): SyntaxBracketRrContext {
		let _localctx: SyntaxBracketRrContext = new SyntaxBracketRrContext(this._ctx, this.state);
		this.enterRule(_localctx, 604, CqlParser.RULE_syntaxBracketRr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2424;
			this.match(CqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public syntaxBracketLc(): SyntaxBracketLcContext {
		let _localctx: SyntaxBracketLcContext = new SyntaxBracketLcContext(this._ctx, this.state);
		this.enterRule(_localctx, 606, CqlParser.RULE_syntaxBracketLc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2426;
			this.match(CqlParser.LC_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public syntaxBracketRc(): SyntaxBracketRcContext {
		let _localctx: SyntaxBracketRcContext = new SyntaxBracketRcContext(this._ctx, this.state);
		this.enterRule(_localctx, 608, CqlParser.RULE_syntaxBracketRc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2428;
			this.match(CqlParser.RC_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public syntaxBracketLa(): SyntaxBracketLaContext {
		let _localctx: SyntaxBracketLaContext = new SyntaxBracketLaContext(this._ctx, this.state);
		this.enterRule(_localctx, 610, CqlParser.RULE_syntaxBracketLa);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2430;
			this.match(CqlParser.OPERATOR_LT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public syntaxBracketRa(): SyntaxBracketRaContext {
		let _localctx: SyntaxBracketRaContext = new SyntaxBracketRaContext(this._ctx, this.state);
		this.enterRule(_localctx, 612, CqlParser.RULE_syntaxBracketRa);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2432;
			this.match(CqlParser.OPERATOR_GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public syntaxBracketLs(): SyntaxBracketLsContext {
		let _localctx: SyntaxBracketLsContext = new SyntaxBracketLsContext(this._ctx, this.state);
		this.enterRule(_localctx, 614, CqlParser.RULE_syntaxBracketLs);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2434;
			this.match(CqlParser.LS_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public syntaxBracketRs(): SyntaxBracketRsContext {
		let _localctx: SyntaxBracketRsContext = new SyntaxBracketRsContext(this._ctx, this.state);
		this.enterRule(_localctx, 616, CqlParser.RULE_syntaxBracketRs);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2436;
			this.match(CqlParser.RS_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public syntaxComma(): SyntaxCommaContext {
		let _localctx: SyntaxCommaContext = new SyntaxCommaContext(this._ctx, this.state);
		this.enterRule(_localctx, 618, CqlParser.RULE_syntaxComma);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2438;
			this.match(CqlParser.COMMA);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public syntaxColon(): SyntaxColonContext {
		let _localctx: SyntaxColonContext = new SyntaxColonContext(this._ctx, this.state);
		this.enterRule(_localctx, 620, CqlParser.RULE_syntaxColon);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2440;
			this.match(CqlParser.COLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public syntaxSquote(): SyntaxSquoteContext {
		let _localctx: SyntaxSquoteContext = new SyntaxSquoteContext(this._ctx, this.state);
		this.enterRule(_localctx, 622, CqlParser.RULE_syntaxSquote);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2442;
			this.match(CqlParser.SQUOTE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public syntaxDquote(): SyntaxDquoteContext {
		let _localctx: SyntaxDquoteContext = new SyntaxDquoteContext(this._ctx, this.state);
		this.enterRule(_localctx, 624, CqlParser.RULE_syntaxDquote);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2444;
			this.match(CqlParser.DQUOTE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public syntaxOperatorEq(): SyntaxOperatorEqContext {
		let _localctx: SyntaxOperatorEqContext = new SyntaxOperatorEqContext(this._ctx, this.state);
		this.enterRule(_localctx, 626, CqlParser.RULE_syntaxOperatorEq);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2446;
			this.match(CqlParser.OPERATOR_EQ);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public syntaxOperatorLt(): SyntaxOperatorLtContext {
		let _localctx: SyntaxOperatorLtContext = new SyntaxOperatorLtContext(this._ctx, this.state);
		this.enterRule(_localctx, 628, CqlParser.RULE_syntaxOperatorLt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2448;
			this.match(CqlParser.OPERATOR_LT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public syntaxOperatorGt(): SyntaxOperatorGtContext {
		let _localctx: SyntaxOperatorGtContext = new SyntaxOperatorGtContext(this._ctx, this.state);
		this.enterRule(_localctx, 630, CqlParser.RULE_syntaxOperatorGt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2450;
			this.match(CqlParser.OPERATOR_GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public syntaxOperatorLte(): SyntaxOperatorLteContext {
		let _localctx: SyntaxOperatorLteContext = new SyntaxOperatorLteContext(this._ctx, this.state);
		this.enterRule(_localctx, 632, CqlParser.RULE_syntaxOperatorLte);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2452;
			this.match(CqlParser.OPERATOR_LTE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public syntaxOperatorGte(): SyntaxOperatorGteContext {
		let _localctx: SyntaxOperatorGteContext = new SyntaxOperatorGteContext(this._ctx, this.state);
		this.enterRule(_localctx, 634, CqlParser.RULE_syntaxOperatorGte);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2454;
			this.match(CqlParser.OPERATOR_GTE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 5;
	private static readonly _serializedATNSegment0: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\xB1\u099B\x04"+
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04"+
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r"+
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12"+
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17"+
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C"+
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04"+
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t"+
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04"+
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04"+
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04"+
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04"+
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04"+
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t"+
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04"+
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04"+
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04"+
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81"+
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86"+
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B"+
		"\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90"+
		"\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95"+
		"\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A"+
		"\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F"+
		"\x04\xA0\t\xA0\x04\xA1\t\xA1\x04\xA2\t\xA2\x04\xA3\t\xA3\x04\xA4\t\xA4"+
		"\x04\xA5\t\xA5\x04\xA6\t\xA6\x04\xA7\t\xA7\x04\xA8\t\xA8\x04\xA9\t\xA9"+
		"\x04\xAA\t\xAA\x04\xAB\t\xAB\x04\xAC\t\xAC\x04\xAD\t\xAD\x04\xAE\t\xAE"+
		"\x04\xAF\t\xAF\x04\xB0\t\xB0\x04\xB1\t\xB1\x04\xB2\t\xB2\x04\xB3\t\xB3"+
		"\x04\xB4\t\xB4\x04\xB5\t\xB5\x04\xB6\t\xB6\x04\xB7\t\xB7\x04\xB8\t\xB8"+
		"\x04\xB9\t\xB9\x04\xBA\t\xBA\x04\xBB\t\xBB\x04\xBC\t\xBC\x04\xBD\t\xBD"+
		"\x04\xBE\t\xBE\x04\xBF\t\xBF\x04\xC0\t\xC0\x04\xC1\t\xC1\x04\xC2\t\xC2"+
		"\x04\xC3\t\xC3\x04\xC4\t\xC4\x04\xC5\t\xC5\x04\xC6\t\xC6\x04\xC7\t\xC7"+
		"\x04\xC8\t\xC8\x04\xC9\t\xC9\x04\xCA\t\xCA\x04\xCB\t\xCB\x04\xCC\t\xCC"+
		"\x04\xCD\t\xCD\x04\xCE\t\xCE\x04\xCF\t\xCF\x04\xD0\t\xD0\x04\xD1\t\xD1"+
		"\x04\xD2\t\xD2\x04\xD3\t\xD3\x04\xD4\t\xD4\x04\xD5\t\xD5\x04\xD6\t\xD6"+
		"\x04\xD7\t\xD7\x04\xD8\t\xD8\x04\xD9\t\xD9\x04\xDA\t\xDA\x04\xDB\t\xDB"+
		"\x04\xDC\t\xDC\x04\xDD\t\xDD\x04\xDE\t\xDE\x04\xDF\t\xDF\x04\xE0\t\xE0"+
		"\x04\xE1\t\xE1\x04\xE2\t\xE2\x04\xE3\t\xE3\x04\xE4\t\xE4\x04\xE5\t\xE5"+
		"\x04\xE6\t\xE6\x04\xE7\t\xE7\x04\xE8\t\xE8\x04\xE9\t\xE9\x04\xEA\t\xEA"+
		"\x04\xEB\t\xEB\x04\xEC\t\xEC\x04\xED\t\xED\x04\xEE\t\xEE\x04\xEF\t\xEF"+
		"\x04\xF0\t\xF0\x04\xF1\t\xF1\x04\xF2\t\xF2\x04\xF3\t\xF3\x04\xF4\t\xF4"+
		"\x04\xF5\t\xF5\x04\xF6\t\xF6\x04\xF7\t\xF7\x04\xF8\t\xF8\x04\xF9\t\xF9"+
		"\x04\xFA\t\xFA\x04\xFB\t\xFB\x04\xFC\t\xFC\x04\xFD\t\xFD\x04\xFE\t\xFE"+
		"\x04\xFF\t\xFF\x04\u0100\t\u0100\x04\u0101\t\u0101\x04\u0102\t\u0102\x04"+
		"\u0103\t\u0103\x04\u0104\t\u0104\x04\u0105\t\u0105\x04\u0106\t\u0106\x04"+
		"\u0107\t\u0107\x04\u0108\t\u0108\x04\u0109\t\u0109\x04\u010A\t\u010A\x04"+
		"\u010B\t\u010B\x04\u010C\t\u010C\x04\u010D\t\u010D\x04\u010E\t\u010E\x04"+
		"\u010F\t\u010F\x04\u0110\t\u0110\x04\u0111\t\u0111\x04\u0112\t\u0112\x04"+
		"\u0113\t\u0113\x04\u0114\t\u0114\x04\u0115\t\u0115\x04\u0116\t\u0116\x04"+
		"\u0117\t\u0117\x04\u0118\t\u0118\x04\u0119\t\u0119\x04\u011A\t\u011A\x04"+
		"\u011B\t\u011B\x04\u011C\t\u011C\x04\u011D\t\u011D\x04\u011E\t\u011E\x04"+
		"\u011F\t\u011F\x04\u0120\t\u0120\x04\u0121\t\u0121\x04\u0122\t\u0122\x04"+
		"\u0123\t\u0123\x04\u0124\t\u0124\x04\u0125\t\u0125\x04\u0126\t\u0126\x04"+
		"\u0127\t\u0127\x04\u0128\t\u0128\x04\u0129\t\u0129\x04\u012A\t\u012A\x04"+
		"\u012B\t\u012B\x04\u012C\t\u012C\x04\u012D\t\u012D\x04\u012E\t\u012E\x04"+
		"\u012F\t\u012F\x04\u0130\t\u0130\x04\u0131\t\u0131\x04\u0132\t\u0132\x04"+
		"\u0133\t\u0133\x04\u0134\t\u0134\x04\u0135\t\u0135\x04\u0136\t\u0136\x04"+
		"\u0137\t\u0137\x04\u0138\t\u0138\x04\u0139\t\u0139\x04\u013A\t\u013A\x04"+
		"\u013B\t\u013B\x04\u013C\t\u013C\x04\u013D\t\u013D\x04\u013E\t\u013E\x04"+
		"\u013F\t\u013F\x03\x02\x05\x02\u0280\n\x02\x03\x02\x05\x02\u0283\n\x02"+
		"\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03\u0289\n\x03\x03\x03\x03\x03\x03"+
		"\x03\x07\x03\u028E\n\x03\f\x03\x0E\x03\u0291\v\x03\x03\x03\x03\x03\x05"+
		"\x03\u0295\n\x03\x03\x03\x05\x03\u0298\n\x03\x03\x03\x05\x03\u029B\n\x03"+
		"\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06"+
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06"+
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06"+
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06"+
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u02C6\n\x06\x03\x07\x03"+
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03"+
		"\t\x03\t\x03\t\x03\t\x05\t\u02D7\n\t\x03\t\x05\t\u02DA\n\t\x03\n\x03\n"+
		"\x03\n\x03\n\x03\n\x05\n\u02E1\n\n\x03\n\x03\n\x03\n\x05\n\u02E6\n\n\x03"+
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x05\f\u02F1\n\f\x03"+
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\u02FB\n\f\x03\r\x03"+
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05"+
		"\r\u030A\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05"+
		"\r\u0315\n\r\x03\r\x03\r\x03\r\x05\r\u031A\n\r\x03\r\x03\r\x03\r\x03\r"+
		"\x03\r\x03\r\x03\r\x05\r\u0323\n\r\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0328"+
		"\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0330\n"+
		"\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0335\n\x0F\x03\x0F\x03\x0F\x05\x0F"+
		"\u0339\n\x0F\x03\x10\x03\x10\x03\x10\x05\x10\u033E\n\x10\x03\x10\x03\x10"+
		"\x03\x10\x05\x10\u0343\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03"+
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\u0350\n\x11\f\x11"+
		"\x0E\x11\u0353\v\x11\x03\x12\x03\x12\x03\x12\x05\x12\u0358\n\x12\x03\x12"+
		"\x03\x12\x03\x12\x05\x12\u035D\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03"+
		"\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0367\n\x13\x03\x13\x03\x13\x03\x13"+
		"\x05\x13\u036C\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03"+
		"\x13\x03\x13\x05\x13\u0376\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13"+
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0382\n\x13\x03\x14\x03"+
		"\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0389\n\x14\x03\x15\x03\x15\x03\x15"+
		"\x03\x15\x07\x15\u038F\n\x15\f\x15\x0E\x15\u0392\v\x15\x03\x16\x03\x16"+
		"\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17"+
		"\x05\x17\u039F\n\x17\x03\x18\x03\x18\x03\x18\x05\x18\u03A4\n\x18\x03\x18"+
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18"+
		"\x05\x18\u03B0\n\x18\x03\x19\x03\x19\x05\x19\u03B4\n\x19\x03\x19\x03\x19"+
		"\x05\x19\u03B8\n\x19\x03\x19\x03\x19\x03\x19\x05\x19\u03BD\n\x19\x03\x19"+
		"\x03\x19\x03\x19\x05\x19\u03C2\n\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03"+
		"\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03"+
		"\x1B\x03\x1B\x07\x1B\u03D3\n\x1B\f\x1B\x0E\x1B\u03D6\v\x1B\x03\x1C\x03"+
		"\x1C\x03\x1C\x03\x1C\x05\x1C\u03DC\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C"+
		"\x03\x1D\x03\x1D\x05\x1D\u03E4\n\x1D\x03\x1D\x03\x1D\x05\x1D\u03E8\n\x1D"+
		"\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u03ED\n\x1D\x03\x1D\x03\x1D\x03\x1D\x03"+
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03"+
		"\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0400\n\x1E\x03\x1F\x03\x1F"+
		"\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u0407\n\x1F\f\x1F\x0E\x1F\u040A\v\x1F"+
		"\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03!\x03!\x03!\x03!\x03!\x03!\x07"+
		"!\u0418\n!\f!\x0E!\u041B\v!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x07"+
		"\"\u0424\n\"\f\"\x0E\"\u0427\v\"\x03\"\x03\"\x03#\x03#\x03#\x03$\x03$"+
		"\x03$\x03$\x03$\x03$\x05$\u0434\n$\x03%\x03%\x03%\x03&\x03&\x05&\u043B"+
		"\n&\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u0442\n\'\x03\'\x03\'\x03\'\x03"+
		"(\x03(\x03(\x05(\u044A\n(\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x07*\u0453"+
		"\n*\f*\x0E*\u0456\v*\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x03,\x03,\x03"+
		",\x03,\x07,\u0463\n,\f,\x0E,\u0466\v,\x03-\x03-\x03-\x03-\x03-\x03.\x03"+
		".\x03.\x03.\x03.\x05.\u0472\n.\x03.\x03.\x03.\x03/\x03/\x03/\x03/\x03"+
		"/\x03/\x05/\u047D\n/\x030\x030\x030\x031\x031\x031\x031\x031\x032\x03"+
		"2\x032\x032\x033\x033\x033\x034\x034\x034\x034\x074\u0492\n4\f4\x0E4\u0495"+
		"\v4\x035\x035\x035\x036\x036\x036\x036\x036\x036\x076\u04A0\n6\f6\x0E"+
		"6\u04A3\v6\x037\x037\x037\x037\x057\u04A9\n7\x038\x038\x038\x038\x038"+
		"\x078\u04B0\n8\f8\x0E8\u04B3\v8\x039\x039\x039\x039\x039\x039\x039\x03"+
		"9\x039\x039\x039\x039\x039\x039\x039\x039\x059\u04C5\n9\x03:\x03:\x03"+
		":\x03:\x03:\x03:\x05:\u04CD\n:\x03:\x03:\x03:\x03:\x05:\u04D3\n:\x03;"+
		"\x03;\x03;\x05;\u04D8\n;\x03;\x03;\x03<\x03<\x03<\x05<\u04DF\n<\x03<\x03"+
		"<\x03<\x05<\u04E4\n<\x03<\x03<\x03=\x03=\x03=\x03=\x05=\u04EC\n=\x03="+
		"\x03=\x03=\x05=\u04F1\n=\x03=\x03=\x03>\x03>\x03>\x05>\u04F8\n>\x03>\x03"+
		">\x03>\x05>\u04FD\n>\x03>\x03>\x03?\x03?\x03?\x05?\u0504\n?\x03?\x03?"+
		"\x03?\x05?\u0509\n?\x03?\x03?\x03@\x03@\x03@\x05@\u0510\n@\x03@\x03@\x03"+
		"@\x03@\x03@\x05@\u0517\n@\x03@\x03@\x03A\x03A\x03A\x05A\u051E\nA\x03A"+
		"\x03A\x03B\x03B\x03B\x05B\u0525\nB\x03B\x03B\x03B\x05B\u052A\nB\x03B\x03"+
		"B\x03C\x03C\x03C\x05C\u0531\nC\x03C\x03C\x03D\x03D\x03D\x05D\u0538\nD"+
		"\x03D\x03D\x03D\x05D\u053D\nD\x03D\x03D\x03E\x03E\x03E\x05E\u0544\nE\x03"+
		"E\x03E\x03E\x05E\u0549\nE\x03E\x03E\x03E\x03E\x03E\x05E\u0550\nE\x03F"+
		"\x03F\x05F\u0554\nF\x03F\x05F\u0557\nF\x03G\x03G\x03G\x03G\x03G\x03G\x05"+
		"G\u055F\nG\x03G\x03G\x03H\x03H\x03H\x03H\x07H\u0567\nH\fH\x0EH\u056A\v"+
		"H\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x05I\u0574\nI\x03J\x03J\x03"+
		"K\x03K\x05K\u057A\nK\x03L\x03L\x03L\x03L\x03L\x07L\u0581\nL\fL\x0EL\u0584"+
		"\vL\x03L\x03L\x03M\x03M\x03M\x03M\x03N\x03N\x03O\x03O\x05O\u0590\nO\x03"+
		"P\x03P\x03P\x03P\x07P\u0596\nP\fP\x0EP\u0599\vP\x03P\x03P\x03P\x05P\u059E"+
		"\nP\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x05Q\u05AB"+
		"\nQ\x03R\x03R\x03R\x03S\x03S\x03S\x03S\x03S\x03S\x03T\x03T\x03T\x05T\u05B9"+
		"\nT\x03U\x03U\x03V\x03V\x03V\x03V\x03W\x03W\x03W\x03W\x03W\x03W\x03X\x03"+
		"X\x03X\x03X\x07X\u05CB\nX\fX\x0EX\u05CE\vX\x03Y\x03Y\x03Y\x03Y\x07Y\u05D4"+
		"\nY\fY\x0EY\u05D7\vY\x03Z\x03Z\x03[\x03[\x03\\\x03\\\x03\\\x03]\x03]\x05"+
		"]\u05E2\n]\x03]\x03]\x05]\u05E6\n]\x03^\x03^\x05^\u05EA\n^\x03_\x03_\x03"+
		"_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x05_\u05F8\n_\x03`\x03"+
		"`\x03`\x03`\x07`\u05FE\n`\f`\x0E`\u0601\v`\x03a\x03a\x03a\x03a\x03a\x03"+
		"a\x05a\u0609\na\x03b\x03b\x03b\x03b\x03c\x03c\x03c\x03d\x03d\x05d\u0614"+
		"\nd\x03d\x03d\x03d\x05d\u0619\nd\x03d\x03d\x03e\x03e\x03e\x05e\u0620\n"+
		"e\x03e\x05e\u0623\ne\x03e\x03e\x03e\x03e\x05e\u0629\ne\x03e\x03e\x03e"+
		"\x03e\x03e\x03f\x03f\x05f\u0632\nf\x03g\x03g\x03g\x03g\x05g\u0638\ng\x03"+
		"h\x03h\x03h\x03h\x03h\x03i\x03i\x03i\x03i\x03i\x03j\x03j\x03j\x03j\x03"+
		"j\x03k\x05k\u064A\nk\x03k\x03k\x05k\u064E\nk\x03k\x03k\x05k\u0652\nk\x03"+
		"k\x03k\x03k\x05k\u0657\nk\x03l\x03l\x03l\x03l\x07l\u065D\nl\fl\x0El\u0660"+
		"\vl\x03m\x03m\x03m\x03m\x03m\x05m\u0667\nm\x03m\x03m\x05m\u066B\nm\x03"+
		"n\x05n\u066E\nn\x03n\x03n\x03n\x03n\x05n\u0674\nn\x03n\x03n\x05n\u0678"+
		"\nn\x03n\x03n\x03n\x03n\x03n\x05n\u067F\nn\x03o\x03o\x03o\x03p\x03p\x03"+
		"p\x03p\x07p\u0688\np\fp\x0Ep\u068B\vp\x03q\x03q\x03q\x03q\x03r\x03r\x03"+
		"r\x03r\x07r\u0695\nr\fr\x0Er\u0698\vr\x03s\x03s\x03s\x03s\x03s\x03s\x05"+
		"s\u06A0\ns\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03"+
		"s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03"+
		"s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03"+
		"s\x03s\x03s\x03s\x03s\x03s\x05s\u06CF\ns\x03t\x03t\x03t\x03t\x03t\x07"+
		"t\u06D6\nt\ft\x0Et\u06D9\vt\x03t\x03t\x03u\x03u\x03u\x03u\x03u\x03u\x03"+
		"u\x03u\x03u\x07u\u06E6\nu\fu\x0Eu\u06E9\vu\x03u\x03u\x03v\x03v\x03v\x03"+
		"v\x03v\x07v\u06F2\nv\fv\x0Ev\u06F5\vv\x03v\x03v\x03w\x03w\x05w\u06FB\n"+
		"w\x03w\x03w\x03w\x03w\x03w\x03w\x05w\u0703\nw\x03w\x03w\x03w\x03w\x03"+
		"w\x05w\u070A\nw\x03w\x05w\u070D\nw\x03x\x03x\x03x\x03x\x03x\x03x\x03x"+
		"\x03x\x03x\x03x\x03x\x03x\x03x\x03x\x03x\x03x\x05x\u071F\nx\x03y\x03y"+
		"\x03y\x03z\x03z\x03z\x03{\x03{\x03{\x03|\x03|\x03|\x03|\x03}\x03}\x03"+
		"}\x03~\x03~\x03~\x03~\x03~\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x80\x03"+
		"\x80\x03\x80\x03\x80\x07\x80\u073E\n\x80\f\x80\x0E\x80\u0741\v\x80\x03"+
		"\x81\x03\x81\x03\x81\x03\x81\x05\x81\u0747\n\x81\x03\x81\x03\x81\x03\x81"+
		"\x03\x81\x03\x81\x05\x81\u074E\n\x81\x07\x81\u0750\n\x81\f\x81\x0E\x81"+
		"\u0753\v\x81\x03\x82\x03\x82\x05\x82\u0757\n\x82\x03\x82\x03\x82\x03\x82"+
		"\x05\x82\u075C\n\x82\x03\x82\x05\x82\u075F\n\x82\x03\x82\x05\x82\u0762"+
		"\n\x82\x03\x82\x05\x82\u0765\n\x82\x03\x83\x03\x83\x03\x83\x03\x84\x03"+
		"\x84\x03\x84\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x05\x85\u0772\n\x85"+
		"\x03\x86\x03\x86\x03\x86\x03\x87\x03\x87\x03\x87\x05\x87\u077A\n\x87\x03"+
		"\x88\x03\x88\x03\x88\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x07\x89\u0784"+
		"\n\x89\f\x89\x0E\x89\u0787\v\x89\x05\x89\u0789\n\x89\x03\x8A\x03\x8A\x03"+
		"\x8A\x03\x8A\x03\x8A\x05\x8A\u0790\n\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A"+
		"\x05\x8A\u0796\n\x8A\x05\x8A\u0798\n\x8A\x03\x8B\x03\x8B\x03\x8B\x03\x8B"+
		"\x07\x8B\u079E\n\x8B\f\x8B\x0E\x8B\u07A1\v\x8B\x03\x8C\x03\x8C\x03\x8C"+
		"\x03\x8C\x03\x8C\x03\x8C\x05\x8C\u07A9\n\x8C\x03\x8C\x03\x8C\x03\x8C\x03"+
		"\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x05\x8C\u07B3\n\x8C\x03\x8C\x03\x8C"+
		"\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x05\x8C\u07BD\n\x8C\x03"+
		"\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x05\x8C\u07C5\n\x8C\x03\x8C"+
		"\x03\x8C\x03\x8C\x03\x8C\x05\x8C\u07CB\n\x8C\x03\x8D\x03\x8D\x03\x8D\x03"+
		"\x8D\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03"+
		"\x8F\x03\x8F\x03\x8F\x05\x8F\u07DC\n\x8F\x03\x8F\x05\x8F\u07DF\n\x8F\x03"+
		"\x90\x03\x90\x03\x90\x05\x90\u07E4\n\x90\x03\x90\x03\x90\x03\x90\x03\x90"+
		"\x05\x90\u07EA\n\x90\x07\x90\u07EC\n\x90\f\x90\x0E\x90\u07EF\v\x90\x03"+
		"\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x05\x91\u07F7\n\x91\x03\x92"+
		"\x03\x92\x03\x93\x03\x93\x03\x94\x03\x94\x03\x95\x03\x95\x03\x96\x03\x96"+
		"\x03\x97\x03\x97\x03\x98\x03\x98\x03\x98\x03\x98\x05\x98\u0809\n\x98\x03"+
		"\x99\x03\x99\x03\x99\x03\x99\x05\x99\u080F\n\x99\x03\x9A\x03\x9A\x03\x9A"+
		"\x03\x9A\x05\x9A\u0815\n\x9A\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x03"+
		"\x9B\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x03"+
		"\x9B\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x03"+
		"\x9B\x03\x9B\x03\x9B\x05\x9B\u0831\n\x9B\x03\x9C\x03\x9C\x05\x9C\u0835"+
		"\n\x9C\x03\x9D\x03\x9D\x03\x9E\x03\x9E\x03\x9F\x03\x9F\x03\xA0\x03\xA0"+
		"\x03\xA1\x03\xA1\x03\xA2\x03\xA2\x03\xA3\x03\xA3\x03\xA4\x03\xA4\x03\xA5"+
		"\x03\xA5\x03\xA6\x03\xA6\x03\xA7\x03\xA7\x03\xA8\x03\xA8\x03\xA8\x03\xA9"+
		"\x03\xA9\x03\xAA\x03\xAA\x03\xAB\x03\xAB\x03\xAC\x03\xAC\x03\xAD\x03\xAD"+
		"\x03\xAD\x03\xAE\x03\xAE\x03\xAF\x03\xAF\x03\xAF\x03\xB0\x03\xB0\x03\xB1"+
		"\x03\xB1\x03\xB2\x03\xB2\x03\xB3\x03\xB3\x03\xB4\x03\xB4\x03\xB5\x03\xB5"+
		"\x03\xB6\x03\xB6\x03\xB7\x03\xB7\x03\xB8\x03\xB8\x03\xB9\x03\xB9\x03\xBA"+
		"\x03\xBA\x03\xBB\x03\xBB\x03\xBC\x03\xBC\x03\xBD\x03\xBD\x03\xBD\x03\xBE"+
		"\x03\xBE\x03\xBF\x03\xBF\x03\xC0\x03\xC0\x03\xC1\x03\xC1\x03\xC2\x03\xC2"+
		"\x03\xC3\x03\xC3\x03\xC4\x03\xC4\x03\xC5\x03\xC5\x03\xC6\x03\xC6\x03\xC7"+
		"\x03\xC7\x03\xC8\x03\xC8\x03\xC9\x03\xC9\x03\xCA\x03\xCA\x03\xCB\x03\xCB"+
		"\x03\xCC\x03\xCC\x03\xCD\x03\xCD\x03\xCE\x03\xCE\x03\xCF\x03\xCF\x03\xD0"+
		"\x03\xD0\x03\xD1\x03\xD1\x03\xD2\x03\xD2\x03\xD3\x03\xD3\x03\xD4\x03\xD4"+
		"\x03\xD5\x03\xD5\x03\xD6\x03\xD6\x03\xD7\x03\xD7\x03\xD8\x03\xD8\x03\xD9"+
		"\x03\xD9\x03\xDA\x03\xDA\x03\xDB\x03\xDB\x03\xDC\x03\xDC\x03\xDD\x03\xDD"+
		"\x03\xDE\x03\xDE\x03\xDF\x03\xDF\x03\xE0\x03\xE0\x03\xE1\x03\xE1\x03\xE2"+
		"\x03\xE2\x03\xE3\x03\xE3\x03\xE4\x03\xE4\x03\xE5\x03\xE5\x03\xE6\x03\xE6"+
		"\x03\xE7\x03\xE7\x03\xE8\x03\xE8\x03\xE9\x03\xE9\x03\xEA\x03\xEA\x03\xEB"+
		"\x03\xEB\x03\xEB\x03\xEC\x03\xEC\x03\xED\x03\xED\x03\xEE\x03\xEE\x03\xEF"+
		"\x03\xEF\x03\xF0\x03\xF0\x03\xF1\x03\xF1\x03\xF2\x03\xF2\x03\xF3\x03\xF3"+
		"\x03\xF4\x03\xF4\x03\xF5\x03\xF5\x03\xF6\x03\xF6\x03\xF7\x03\xF7\x03\xF8"+
		"\x03\xF8\x03\xF9\x03\xF9\x03\xFA\x03\xFA\x03\xFB\x03\xFB\x03\xFC\x03\xFC"+
		"\x03\xFD\x03\xFD\x03\xFE\x03\xFE\x03\xFF\x03\xFF\x03\u0100\x03\u0100\x03"+
		"\u0101\x03\u0101\x03\u0102\x03\u0102\x03\u0103\x03\u0103\x03\u0104\x03"+
		"\u0104\x03\u0105\x03\u0105\x03\u0106\x03\u0106\x03\u0107\x03\u0107\x03"+
		"\u0108\x03\u0108\x03\u0109\x03\u0109\x03\u010A\x03\u010A\x03\u010B\x03"+
		"\u010B\x03\u010C\x03\u010C\x03\u010D\x03\u010D\x03\u010E\x03\u010E\x03"+
		"\u010F\x03\u010F\x03\u0110\x03\u0110\x03\u0111\x03\u0111\x03\u0112\x03"+
		"\u0112\x03\u0113\x03\u0113\x03\u0114\x03\u0114\x03\u0115\x03\u0115\x03"+
		"\u0116\x03\u0116\x03\u0116\x03\u0117\x03\u0117\x03\u0118\x03\u0118\x03"+
		"\u0119\x03\u0119\x03\u0119\x03\u011A\x03\u011A\x03\u011A\x03\u011B\x03"+
		"\u011B\x03\u011C\x03\u011C\x03\u011C\x03\u011D\x03\u011D\x03\u011E\x03"+
		"\u011E\x03\u011F\x03\u011F\x03\u0120\x03\u0120\x03\u0121\x03\u0121\x03"+
		"\u0122\x03\u0122\x03\u0122\x03\u0123\x03\u0123\x03\u0124\x03\u0124\x03"+
		"\u0125\x03\u0125\x03\u0126\x03\u0126\x03\u0127\x03\u0127\x03\u0127\x03"+
		"\u0127\x03\u0127\x07\u0127\u095A\n\u0127\f\u0127\x0E\u0127\u095D";
	private static readonly _serializedATNSegment1: string =
		"\v\u0127\x03\u0127\x03\u0127\x03\u0128\x03\u0128\x03\u0128\x03\u0128\x03"+
		"\u0128\x03\u0128\x03\u0129\x03\u0129\x03\u0129\x03\u0129\x03\u012A\x03"+
		"\u012A\x03\u012A\x03\u012A\x03\u012B\x03\u012B\x03\u012B\x03\u012B\x03"+
		"\u012C\x03\u012C\x03\u012D\x03\u012D\x03\u012E\x03\u012E\x03\u012F\x03"+
		"\u012F\x03\u0130\x03\u0130\x03\u0131\x03\u0131\x03\u0132\x03\u0132\x03"+
		"\u0133\x03\u0133\x03\u0134\x03\u0134\x03\u0135\x03\u0135\x03\u0136\x03"+
		"\u0136\x03\u0137\x03\u0137\x03\u0138\x03\u0138\x03\u0139\x03\u0139\x03"+
		"\u013A\x03\u013A\x03\u013B\x03\u013B\x03\u013C\x03\u013C\x03\u013D\x03"+
		"\u013D\x03\u013E\x03\u013E\x03\u013F\x03\u013F\x03\u013F\x02\x02\x02\u0140"+
		"\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14"+
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02"+
		"*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02"+
		"F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02"+
		"b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02"+
		"~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02"+
		"\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02"+
		"\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02"+
		"\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02"+
		"\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02"+
		"\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8\x02"+
		"\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02\xFA\x02"+
		"\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02\u0106\x02\u0108\x02\u010A"+
		"\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02\u0114\x02\u0116\x02\u0118"+
		"\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02\u0122\x02\u0124\x02\u0126"+
		"\x02\u0128\x02\u012A\x02\u012C\x02\u012E\x02\u0130\x02\u0132\x02\u0134"+
		"\x02\u0136\x02\u0138\x02\u013A\x02\u013C\x02\u013E\x02\u0140\x02\u0142"+
		"\x02\u0144\x02\u0146\x02\u0148\x02\u014A\x02\u014C\x02\u014E\x02\u0150"+
		"\x02\u0152\x02\u0154\x02\u0156\x02\u0158\x02\u015A\x02\u015C\x02\u015E"+
		"\x02\u0160\x02\u0162\x02\u0164\x02\u0166\x02\u0168\x02\u016A\x02\u016C"+
		"\x02\u016E\x02\u0170\x02\u0172\x02\u0174\x02\u0176\x02\u0178\x02\u017A"+
		"\x02\u017C\x02\u017E\x02\u0180\x02\u0182\x02\u0184\x02\u0186\x02\u0188"+
		"\x02\u018A\x02\u018C\x02\u018E\x02\u0190\x02\u0192\x02\u0194\x02\u0196"+
		"\x02\u0198\x02\u019A\x02\u019C\x02\u019E\x02\u01A0\x02\u01A2\x02\u01A4"+
		"\x02\u01A6\x02\u01A8\x02\u01AA\x02\u01AC\x02\u01AE\x02\u01B0\x02\u01B2"+
		"\x02\u01B4\x02\u01B6\x02\u01B8\x02\u01BA\x02\u01BC\x02\u01BE\x02\u01C0"+
		"\x02\u01C2\x02\u01C4\x02\u01C6\x02\u01C8\x02\u01CA\x02\u01CC\x02\u01CE"+
		"\x02\u01D0\x02\u01D2\x02\u01D4\x02\u01D6\x02\u01D8\x02\u01DA\x02\u01DC"+
		"\x02\u01DE\x02\u01E0\x02\u01E2\x02\u01E4\x02\u01E6\x02\u01E8\x02\u01EA"+
		"\x02\u01EC\x02\u01EE\x02\u01F0\x02\u01F2\x02\u01F4\x02\u01F6\x02\u01F8"+
		"\x02\u01FA\x02\u01FC\x02\u01FE\x02\u0200\x02\u0202\x02\u0204\x02\u0206"+
		"\x02\u0208\x02\u020A\x02\u020C\x02\u020E\x02\u0210\x02\u0212\x02\u0214"+
		"\x02\u0216\x02\u0218\x02\u021A\x02\u021C\x02\u021E\x02\u0220\x02\u0222"+
		"\x02\u0224\x02\u0226\x02\u0228\x02\u022A\x02\u022C\x02\u022E\x02\u0230"+
		"\x02\u0232\x02\u0234\x02\u0236\x02\u0238\x02\u023A\x02\u023C\x02\u023E"+
		"\x02\u0240\x02\u0242\x02\u0244\x02\u0246\x02\u0248\x02\u024A\x02\u024C"+
		"\x02\u024E\x02\u0250\x02\u0252\x02\u0254\x02\u0256\x02\u0258\x02\u025A"+
		"\x02\u025C\x02\u025E\x02\u0260\x02\u0262\x02\u0264\x02\u0266\x02\u0268"+
		"\x02\u026A\x02\u026C\x02\u026E\x02\u0270\x02\u0272\x02\u0274\x02\u0276"+
		"\x02\u0278\x02\u027A\x02\u027C\x02\x02\x05\x04\x02\x16\x16\x18\x18\x03"+
		"\x02\xA7\xA8\x04\x0299~~\u0983\x02\u027F\x03\x02\x02\x02\x04\u028F\x03"+
		"\x02\x02\x02\x06\u029C\x03\x02\x02\x02\b\u029E\x03\x02\x02\x02\n\u02C5"+
		"\x03\x02\x02\x02\f\u02C7\x03\x02\x02\x02\x0E\u02CE\x03\x02\x02\x02\x10"+
		"\u02D1\x03\x02\x02\x02\x12\u02DB\x03\x02\x02\x02\x14\u02E7\x03\x02\x02"+
		"\x02\x16\u02FA\x03\x02\x02\x02\x18\u0322\x03\x02\x02\x02\x1A\u0324\x03"+
		"\x02\x02\x02\x1C\u0331\x03\x02\x02\x02\x1E\u033A\x03\x02\x02\x02 \u0349"+
		"\x03\x02\x02\x02\"\u0354\x03\x02\x02\x02$\u0362\x03\x02\x02\x02&\u0383"+
		"\x03\x02\x02\x02(\u038A\x03\x02\x02\x02*\u0393\x03\x02\x02\x02,\u039E"+
		"\x03\x02\x02\x02.\u03A0\x03\x02\x02\x020\u03B1\x03\x02\x02\x022\u03CC"+
		"\x03\x02\x02\x024\u03CE\x03\x02\x02\x026\u03DB\x03\x02\x02\x028\u03E1"+
		"\x03\x02\x02\x02:\u03FF\x03\x02\x02\x02<\u0401\x03\x02\x02\x02>\u040D"+
		"\x03\x02\x02\x02@\u0411\x03\x02\x02\x02B\u041E\x03\x02\x02\x02D\u042A"+
		"\x03\x02\x02\x02F\u042D\x03\x02\x02\x02H\u0435\x03\x02\x02\x02J\u043A"+
		"\x03\x02\x02\x02L\u043C\x03\x02\x02\x02N\u0449\x03\x02\x02\x02P\u044B"+
		"\x03\x02\x02\x02R\u044E\x03\x02\x02\x02T\u0457\x03\x02\x02\x02V\u045B"+
		"\x03\x02\x02\x02X\u0467\x03\x02\x02\x02Z\u046C\x03\x02\x02\x02\\\u047C"+
		"\x03\x02\x02\x02^\u047E\x03\x02\x02\x02`\u0481\x03\x02\x02\x02b\u0486"+
		"\x03\x02\x02\x02d\u048A\x03\x02\x02\x02f\u048D\x03\x02\x02\x02h\u0496"+
		"\x03\x02\x02\x02j\u0499\x03\x02\x02\x02l\u04A4\x03\x02\x02\x02n\u04AA"+
		"\x03\x02\x02\x02p\u04C4\x03\x02\x02\x02r\u04C6\x03\x02\x02\x02t\u04D4"+
		"\x03\x02\x02\x02v\u04DB\x03\x02\x02\x02x\u04E7\x03\x02\x02\x02z\u04F4"+
		"\x03\x02\x02\x02|\u0500\x03\x02\x02\x02~\u050C\x03\x02\x02\x02\x80\u051A"+
		"\x03\x02\x02\x02\x82\u0521\x03\x02\x02\x02\x84\u052D\x03\x02\x02\x02\x86"+
		"\u0534\x03\x02\x02\x02\x88\u0540\x03\x02\x02\x02\x8A\u0551\x03\x02\x02"+
		"\x02\x8C\u0558\x03\x02\x02\x02\x8E\u0562\x03\x02\x02\x02\x90\u0573\x03"+
		"\x02\x02\x02\x92\u0575\x03\x02\x02\x02\x94\u0579\x03\x02\x02\x02\x96\u057B"+
		"\x03\x02\x02\x02\x98\u0587\x03\x02\x02\x02\x9A\u058B\x03\x02\x02\x02\x9C"+
		"\u058F\x03\x02\x02\x02\x9E\u0591\x03\x02\x02\x02\xA0\u05AA\x03\x02\x02"+
		"\x02\xA2\u05AC\x03\x02\x02\x02\xA4\u05AF\x03\x02\x02\x02\xA6\u05B8\x03"+
		"\x02\x02\x02\xA8\u05BA\x03\x02\x02\x02\xAA\u05BC\x03\x02\x02\x02\xAC\u05C0"+
		"\x03\x02\x02\x02\xAE\u05C6\x03\x02\x02\x02\xB0\u05CF\x03\x02\x02\x02\xB2"+
		"\u05D8\x03\x02\x02\x02\xB4\u05DA\x03\x02\x02\x02\xB6\u05DC\x03\x02\x02"+
		"\x02\xB8\u05DF\x03\x02\x02\x02\xBA\u05E9\x03\x02\x02\x02\xBC\u05EB\x03"+
		"\x02\x02\x02\xBE\u05F9\x03\x02\x02\x02\xC0\u0608\x03\x02\x02\x02\xC2\u060A"+
		"\x03\x02\x02\x02\xC4\u060E\x03\x02\x02\x02\xC6\u0611\x03\x02\x02\x02\xC8"+
		"\u061C\x03\x02\x02\x02\xCA\u0631\x03\x02\x02\x02\xCC\u0637\x03\x02\x02"+
		"\x02\xCE\u0639\x03\x02\x02\x02\xD0\u063E\x03\x02\x02\x02\xD2\u0643\x03"+
		"\x02\x02\x02\xD4\u0649\x03\x02\x02\x02\xD6\u0658\x03\x02\x02\x02\xD8\u066A"+
		"\x03\x02\x02\x02\xDA\u066D\x03\x02\x02\x02\xDC\u0680\x03\x02\x02\x02\xDE"+
		"\u0683\x03\x02\x02\x02\xE0\u068C\x03\x02\x02\x02\xE2\u0690\x03\x02\x02"+
		"\x02\xE4\u06CE\x03\x02\x02\x02\xE6\u06D0\x03\x02\x02\x02\xE8\u06DC\x03"+
		"\x02\x02\x02\xEA\u06EC\x03\x02\x02\x02\xEC\u06FA\x03\x02\x02\x02\xEE\u071E"+
		"\x03\x02\x02\x02\xF0\u0720\x03\x02\x02\x02\xF2\u0723\x03\x02\x02\x02\xF4"+
		"\u0726\x03\x02\x02\x02\xF6\u0729\x03\x02\x02\x02\xF8\u072D\x03\x02\x02"+
		"\x02\xFA\u0730\x03\x02\x02\x02\xFC\u0735\x03\x02\x02\x02\xFE\u0739\x03"+
		"\x02\x02\x02\u0100\u0746\x03\x02\x02\x02\u0102\u0754\x03\x02\x02\x02\u0104"+
		"\u0766\x03\x02\x02\x02\u0106\u0769\x03\x02\x02\x02\u0108\u0771\x03\x02"+
		"\x02\x02\u010A\u0773\x03\x02\x02\x02\u010C\u0776\x03\x02\x02\x02\u010E"+
		"\u077B\x03\x02\x02\x02\u0110\u0788\x03\x02\x02\x02\u0112\u0797\x03\x02"+
		"\x02\x02\u0114\u0799\x03\x02\x02\x02\u0116\u07CA\x03\x02\x02\x02\u0118"+
		"\u07CC\x03\x02\x02\x02\u011A\u07D0\x03\x02\x02\x02\u011C\u07DE\x03\x02"+
		"\x02\x02\u011E\u07E3\x03\x02\x02\x02\u0120\u07F6\x03\x02\x02\x02\u0122"+
		"\u07F8\x03\x02\x02\x02\u0124\u07FA\x03\x02\x02\x02\u0126\u07FC\x03\x02"+
		"\x02\x02\u0128\u07FE\x03\x02\x02\x02\u012A\u0800\x03\x02\x02\x02\u012C"+
		"\u0802\x03\x02\x02\x02\u012E\u0808\x03\x02\x02\x02\u0130\u080E\x03\x02"+
		"\x02\x02\u0132\u0814\x03\x02\x02\x02\u0134\u0830\x03\x02\x02\x02\u0136"+
		"\u0834\x03\x02\x02\x02\u0138\u0836\x03\x02\x02\x02\u013A\u0838\x03\x02"+
		"\x02\x02\u013C\u083A\x03\x02\x02\x02\u013E\u083C\x03\x02\x02\x02\u0140"+
		"\u083E\x03\x02\x02\x02\u0142\u0840\x03\x02\x02\x02\u0144\u0842\x03\x02"+
		"\x02\x02\u0146\u0844\x03\x02\x02\x02\u0148\u0846\x03\x02\x02\x02\u014A"+
		"\u0848\x03\x02\x02\x02\u014C\u084A\x03\x02\x02\x02\u014E\u084C\x03\x02"+
		"\x02\x02\u0150\u084F\x03\x02\x02\x02\u0152\u0851\x03\x02\x02\x02\u0154"+
		"\u0853\x03\x02\x02\x02\u0156\u0855\x03\x02\x02\x02\u0158\u0857\x03\x02"+
		"\x02\x02\u015A\u085A\x03\x02\x02\x02\u015C\u085C\x03\x02\x02\x02\u015E"+
		"\u085F\x03\x02\x02\x02\u0160\u0861\x03\x02\x02\x02\u0162\u0863\x03\x02"+
		"\x02\x02\u0164\u0865\x03\x02\x02\x02\u0166\u0867\x03\x02\x02\x02\u0168"+
		"\u0869\x03\x02\x02\x02\u016A\u086B\x03\x02\x02\x02\u016C\u086D\x03\x02"+
		"\x02\x02\u016E\u086F\x03\x02\x02\x02\u0170\u0871\x03\x02\x02\x02\u0172"+
		"\u0873\x03\x02\x02\x02\u0174\u0875\x03\x02\x02\x02\u0176\u0877\x03\x02"+
		"\x02\x02\u0178\u0879\x03\x02\x02\x02\u017A\u087C\x03\x02\x02\x02\u017C"+
		"\u087E\x03\x02\x02\x02\u017E\u0880\x03\x02\x02\x02\u0180\u0882\x03\x02"+
		"\x02\x02\u0182\u0884\x03\x02\x02\x02\u0184\u0886\x03\x02\x02\x02\u0186"+
		"\u0888\x03\x02\x02\x02\u0188\u088A\x03\x02\x02\x02\u018A\u088C\x03\x02"+
		"\x02\x02\u018C\u088E\x03\x02\x02\x02\u018E\u0890\x03\x02\x02\x02\u0190"+
		"\u0892\x03\x02\x02\x02\u0192\u0894\x03\x02\x02\x02\u0194\u0896\x03\x02"+
		"\x02\x02\u0196\u0898\x03\x02\x02\x02\u0198\u089A\x03\x02\x02\x02\u019A"+
		"\u089C\x03\x02\x02\x02\u019C\u089E\x03\x02\x02\x02\u019E\u08A0\x03\x02"+
		"\x02\x02\u01A0\u08A2\x03\x02\x02\x02\u01A2\u08A4\x03\x02\x02\x02\u01A4"+
		"\u08A6\x03\x02\x02\x02\u01A6\u08A8\x03\x02\x02\x02\u01A8\u08AA\x03\x02"+
		"\x02\x02\u01AA\u08AC\x03\x02\x02\x02\u01AC\u08AE\x03\x02\x02\x02\u01AE"+
		"\u08B0\x03\x02\x02\x02\u01B0\u08B2\x03\x02\x02\x02\u01B2\u08B4\x03\x02"+
		"\x02\x02\u01B4\u08B6\x03\x02\x02\x02\u01B6\u08B8\x03\x02\x02\x02\u01B8"+
		"\u08BA\x03\x02\x02\x02\u01BA\u08BC\x03\x02\x02\x02\u01BC\u08BE\x03\x02"+
		"\x02\x02\u01BE\u08C0\x03\x02\x02\x02\u01C0\u08C2\x03\x02\x02\x02\u01C2"+
		"\u08C4\x03\x02\x02\x02\u01C4\u08C6\x03\x02\x02\x02\u01C6\u08C8\x03\x02"+
		"\x02\x02\u01C8\u08CA\x03\x02\x02\x02\u01CA\u08CC\x03\x02\x02\x02\u01CC"+
		"\u08CE\x03\x02\x02\x02\u01CE\u08D0\x03\x02\x02\x02\u01D0\u08D2\x03\x02"+
		"\x02\x02\u01D2\u08D4\x03\x02\x02\x02\u01D4\u08D6\x03\x02\x02\x02\u01D6"+
		"\u08D9\x03\x02\x02\x02\u01D8\u08DB\x03\x02\x02\x02\u01DA\u08DD\x03\x02"+
		"\x02\x02\u01DC\u08DF\x03\x02\x02\x02\u01DE\u08E1\x03\x02\x02\x02\u01E0"+
		"\u08E3\x03\x02\x02\x02\u01E2\u08E5\x03\x02\x02\x02\u01E4\u08E7\x03\x02"+
		"\x02\x02\u01E6\u08E9\x03\x02\x02\x02\u01E8\u08EB\x03\x02\x02\x02\u01EA"+
		"\u08ED\x03\x02\x02\x02\u01EC\u08EF\x03\x02\x02\x02\u01EE\u08F1\x03\x02"+
		"\x02\x02\u01F0\u08F3\x03\x02\x02\x02\u01F2\u08F5\x03\x02\x02\x02\u01F4"+
		"\u08F7\x03\x02\x02\x02\u01F6\u08F9\x03\x02\x02\x02\u01F8\u08FB\x03\x02"+
		"\x02\x02\u01FA\u08FD\x03\x02\x02\x02\u01FC\u08FF\x03\x02\x02\x02\u01FE"+
		"\u0901\x03\x02\x02\x02\u0200\u0903\x03\x02\x02\x02\u0202\u0905\x03\x02"+
		"\x02\x02\u0204\u0907\x03\x02\x02\x02\u0206\u0909\x03\x02\x02\x02\u0208"+
		"\u090B\x03\x02\x02\x02\u020A\u090D\x03\x02\x02\x02\u020C\u090F\x03\x02"+
		"\x02\x02\u020E\u0911\x03\x02\x02\x02\u0210\u0913\x03\x02\x02\x02\u0212"+
		"\u0915\x03\x02\x02\x02\u0214\u0917\x03\x02\x02\x02\u0216\u0919\x03\x02"+
		"\x02\x02\u0218\u091B\x03\x02\x02\x02\u021A\u091D\x03\x02\x02\x02\u021C"+
		"\u091F\x03\x02\x02\x02\u021E\u0921\x03\x02\x02\x02\u0220\u0923\x03\x02"+
		"\x02\x02\u0222\u0925\x03\x02\x02\x02\u0224\u0927\x03\x02\x02\x02\u0226"+
		"\u0929\x03\x02\x02\x02\u0228\u092B\x03\x02\x02\x02\u022A\u092D\x03\x02"+
		"\x02\x02\u022C\u0930\x03\x02\x02\x02\u022E\u0932\x03\x02\x02\x02\u0230"+
		"\u0934\x03\x02\x02\x02\u0232\u0937\x03\x02\x02\x02\u0234\u093A\x03\x02"+
		"\x02\x02\u0236\u093C\x03\x02\x02\x02\u0238\u093F\x03\x02\x02\x02\u023A"+
		"\u0941\x03\x02\x02\x02\u023C\u0943\x03\x02\x02\x02\u023E\u0945\x03\x02"+
		"\x02\x02\u0240\u0947\x03\x02\x02\x02\u0242\u0949\x03\x02\x02\x02\u0244"+
		"\u094C\x03\x02\x02\x02\u0246\u094E\x03\x02\x02\x02\u0248\u0950\x03\x02"+
		"\x02\x02\u024A\u0952\x03\x02\x02\x02\u024C\u0954\x03\x02\x02\x02\u024E"+
		"\u0960\x03\x02\x02\x02\u0250\u0966\x03\x02\x02\x02\u0252\u096A\x03\x02"+
		"\x02\x02\u0254\u096E\x03\x02\x02\x02\u0256\u0972\x03\x02\x02\x02\u0258"+
		"\u0974\x03\x02\x02\x02\u025A\u0976\x03\x02\x02\x02\u025C\u0978\x03\x02"+
		"\x02\x02\u025E\u097A\x03\x02\x02\x02\u0260\u097C\x03\x02\x02\x02\u0262"+
		"\u097E\x03\x02\x02\x02\u0264\u0980\x03\x02\x02\x02\u0266\u0982\x03\x02"+
		"\x02\x02\u0268\u0984\x03\x02\x02\x02\u026A\u0986\x03\x02\x02\x02\u026C"+
		"\u0988\x03\x02\x02\x02\u026E\u098A\x03\x02\x02\x02\u0270\u098C\x03\x02"+
		"\x02\x02\u0272\u098E\x03\x02\x02\x02\u0274\u0990\x03\x02\x02\x02\u0276"+
		"\u0992\x03\x02\x02\x02\u0278\u0994\x03\x02\x02\x02\u027A\u0996\x03\x02"+
		"\x02\x02\u027C\u0998\x03\x02\x02\x02\u027E\u0280\x05\x04\x03\x02\u027F"+
		"\u027E\x03\x02\x02\x02\u027F\u0280\x03\x02\x02\x02\u0280\u0282\x03\x02"+
		"\x02\x02\u0281\u0283\x07\x17\x02\x02\u0282\u0281\x03\x02\x02\x02\u0282"+
		"\u0283\x03\x02\x02\x02\u0283\u0284\x03\x02\x02\x02\u0284\u0285\x05\u025A"+
		"\u012E\x02\u0285\x03\x03\x02\x02\x02\u0286\u0288\x05\n\x06\x02\u0287\u0289"+
		"\x07\x17\x02\x02\u0288\u0287\x03\x02\x02\x02\u0288\u0289\x03\x02\x02\x02"+
		"\u0289\u028A\x03\x02\x02\x02\u028A\u028B\x05\x06\x04\x02\u028B\u028E\x03"+
		"\x02\x02\x02\u028C\u028E\x05\b\x05\x02\u028D\u0286\x03\x02\x02\x02\u028D"+
		"\u028C\x03\x02\x02\x02\u028E\u0291\x03\x02\x02\x02\u028F\u028D\x03\x02"+
		"\x02\x02\u028F\u0290\x03\x02\x02\x02\u0290\u029A\x03\x02\x02\x02\u0291"+
		"\u028F\x03\x02\x02\x02\u0292\u0297\x05\n\x06\x02\u0293\u0295\x07\x17\x02"+
		"\x02\u0294\u0293\x03\x02\x02\x02\u0294\u0295\x03\x02\x02\x02\u0295\u0296"+
		"\x03\x02\x02\x02\u0296\u0298\x05\x06\x04\x02\u0297\u0294\x03\x02\x02\x02"+
		"\u0297\u0298\x03\x02\x02\x02\u0298\u029B\x03\x02\x02\x02\u0299\u029B\x05"+
		"\b\x05\x02\u029A\u0292\x03\x02\x02\x02\u029A\u0299\x03\x02\x02\x02\u029B"+
		"\x05\x03\x02\x02\x02\u029C\u029D\x07\n\x02\x02\u029D\x07\x03\x02\x02\x02"+
		"\u029E\u029F\x05\x06\x04\x02\u029F\t\x03\x02\x02\x02\u02A0\u02C6\x05\xBC"+
		"_\x02\u02A1\u02C6\x05r:\x02\u02A2\u02C6\x05l7\x02\u02A3\u02C6\x05Z.\x02"+
		"\u02A4\u02C6\x05L\'\x02\u02A5\u02C6\x05F$\x02\u02A6\u02C6\x05\xB6\\\x02"+
		"\u02A7\u02C6\x058\x1D\x02\u02A8\u02C6\x050\x19\x02\u02A9\u02C6\x05\xC8"+
		"e\x02\u02AA\u02C6\x05.\x18\x02\u02AB\u02C6\x05$\x13\x02\u02AC\u02C6\x05"+
		"\x1C\x0F\x02\u02AD\u02C6\x05\x88E\x02\u02AE\u02C6\x05\"\x12\x02\u02AF"+
		"\u02C6\x05\x1E\x10\x02\u02B0\u02C6\x05\x1A\x0E\x02\u02B1\u02C6\x05\xD4"+
		"k\x02\u02B2\u02C6\x05z>\x02\u02B3\u02C6\x05|?\x02\u02B4\u02C6\x05\x86"+
		"D\x02\u02B5\u02C6\x05\x84C\x02\u02B6\u02C6\x05x=\x02\u02B7\u02C6\x05\x80"+
		"A\x02\u02B8\u02C6\x05\x82B\x02\u02B9\u02C6\x05~@\x02\u02BA\u02C6\x05v"+
		"<\x02\u02BB\u02C6\x05t;\x02\u02BC\u02C6\x05\x14\v\x02\u02BD\u02C6\x05"+
		"\xECw\x02\u02BE\u02C6\x05\x12\n\x02\u02BF\u02C6\x05\x10\t\x02\u02C0\u02C6"+
		"\x05\f\x07\x02\u02C1\u02C6\x05\u0102\x82\x02\u02C2\u02C6\x05\xC6d\x02"+
		"\u02C3\u02C6\x05\xDAn\x02\u02C4\u02C6\x05\xC4c\x02\u02C5\u02A0\x03\x02"+
		"\x02\x02\u02C5\u02A1\x03\x02\x02\x02\u02C5\u02A2\x03\x02\x02\x02\u02C5"+
		"\u02A3\x03\x02\x02\x02\u02C5\u02A4\x03\x02\x02\x02\u02C5\u02A5\x03\x02"+
		"\x02\x02\u02C5\u02A6\x03\x02\x02\x02\u02C5\u02A7\x03\x02\x02\x02\u02C5"+
		"\u02A8\x03\x02\x02\x02\u02C5\u02A9\x03\x02\x02\x02\u02C5\u02AA\x03\x02"+
		"\x02\x02\u02C5\u02AB\x03\x02\x02\x02\u02C5\u02AC\x03\x02\x02\x02\u02C5"+
		"\u02AD\x03\x02\x02\x02\u02C5\u02AE\x03\x02\x02\x02\u02C5\u02AF\x03\x02"+
		"\x02\x02\u02C5\u02B0\x03\x02\x02\x02\u02C5\u02B1\x03\x02\x02\x02\u02C5"+
		"\u02B2\x03\x02\x02\x02\u02C5\u02B3\x03\x02\x02\x02\u02C5\u02B4\x03\x02"+
		"\x02\x02\u02C5\u02B5\x03\x02\x02\x02\u02C5\u02B6\x03\x02\x02\x02\u02C5"+
		"\u02B7\x03\x02\x02\x02\u02C5\u02B8\x03\x02\x02\x02\u02C5\u02B9\x03\x02"+
		"\x02\x02\u02C5\u02BA\x03\x02\x02\x02\u02C5\u02BB\x03\x02\x02\x02\u02C5"+
		"\u02BC\x03\x02\x02\x02\u02C5\u02BD\x03\x02\x02\x02\u02C5\u02BE\x03\x02"+
		"\x02\x02\u02C5\u02BF\x03\x02\x02\x02\u02C5\u02C0\x03\x02\x02\x02\u02C5"+
		"\u02C1\x03\x02\x02\x02\u02C5\u02C2\x03\x02\x02\x02\u02C5\u02C3\x03\x02"+
		"\x02\x02\u02C5\u02C4\x03\x02\x02\x02\u02C6\v\x03\x02\x02\x02\u02C7\u02C8"+
		"\x05\u0216\u010C\x02\u02C8\u02C9\x05\x16\f\x02\u02C9\u02CA\x05\u01CC\xE7"+
		"\x02\u02CA\u02CB\x05\x18\r\x02\u02CB\u02CC\x05\u0192\xCA\x02\u02CC\u02CD"+
		"\x05\u0138\x9D\x02\u02CD\r\x03\x02\x02\x02\u02CE\u02CF\x05\u01B8\xDD\x02"+
		"\u02CF\u02D0\x05\u020A\u0106\x02\u02D0\x0F\x03\x02\x02\x02\u02D1\u02D2"+
		"\x05\u01B8\xDD\x02\u02D2\u02D6\x05\u01E4\xF3\x02\u02D3\u02D4\x05\u01CA"+
		"\xE6\x02\u02D4\u02D5\x05\u0138\x9D\x02\u02D5\u02D7\x03\x02\x02\x02\u02D6"+
		"\u02D3\x03\x02\x02\x02\u02D6\u02D7\x03\x02\x02\x02\u02D7\u02D9\x03\x02"+
		"\x02\x02\u02D8\u02DA\x05\u01C4\xE3\x02\u02D9\u02D8\x03\x02\x02\x02\u02D9"+
		"\u02DA\x03\x02\x02\x02\u02DA\x11\x03\x02\x02\x02\u02DB\u02DC\x05\u01B8"+
		"\xDD\x02\u02DC\u02E0\x05\x16\f\x02\u02DD\u02DE\x05\u01CC\xE7\x02\u02DE"+
		"\u02DF\x05\x18\r\x02\u02DF\u02E1\x03\x02\x02\x02\u02E0\u02DD\x03\x02\x02"+
		"\x02\u02E0\u02E1\x03\x02\x02\x02\u02E1\u02E5\x03\x02\x02\x02\u02E2\u02E3"+
		"\x05\u01CA\xE6\x02\u02E3\u02E4\x05\u0138\x9D\x02\u02E4\u02E6\x03\x02\x02"+
		"\x02\u02E5\u02E2\x03\x02\x02\x02\u02E5\u02E6\x03\x02\x02\x02\u02E6\x13"+
		"\x03\x02\x02\x02\u02E7\u02E8\x05\u019A\xCE\x02\u02E8\u02E9\x05\x16\f\x02"+
		"\u02E9\u02EA\x05\u01CC\xE7\x02\u02EA\u02EB\x05\x18\r\x02\u02EB\u02EC\x05"+
		"\u01F8\xFD\x02\u02EC\u02ED\x05\u0138\x9D\x02\u02ED\x15\x03\x02\x02\x02"+
		"\u02EE\u02F1\x05\u0156\xAC\x02\u02EF\u02F1\x05\u0158\xAD\x02\u02F0\u02EE"+
		"\x03\x02\x02\x02\u02F0\u02EF\x03\x02\x02\x02\u02F1\u02FB\x03\x02\x02\x02"+
		"\u02F2\u02FB\x05\u015E\xB0\x02\u02F3\u02FB\x05\u0168\xB5\x02\u02F4\u02FB"+
		"\x05\u0180\xC1\x02\u02F5\u02FB\x05\u018A\xC6\x02\u02F6\u02FB\x05\u017A"+
		"\xBE\x02\u02F7\u02FB\x05\u0184\xC3\x02\u02F8\u02FB\x05\u01C0\xE1\x02\u02F9"+
		"\u02FB\x05\u01E6\xF4\x02\u02FA\u02F0\x03\x02\x02\x02\u02FA\u02F2\x03\x02"+
		"\x02\x02\u02FA\u02F3\x03\x02\x02\x02\u02FA\u02F4\x03\x02\x02\x02\u02FA"+
		"\u02F5\x03\x02\x02\x02\u02FA\u02F6\x03\x02\x02\x02\u02FA\u02F7\x03\x02"+
		"\x02\x02\u02FA\u02F8\x03\x02\x02\x02\u02FA\u02F9\x03\x02\x02\x02\u02FB"+
		"\x17\x03\x02\x02\x02\u02FC\u02FD\x05\u0156\xAC\x02\u02FD\u02FE\x05\u0198"+
		"\xCD\x02\u02FE\u0323\x03\x02\x02\x02\u02FF\u0300\x05\u0156\xAC\x02\u0300"+
		"\u0301\x05\u0198\xCD\x02\u0301\u0302\x05\u019E\xD0\x02\u0302\u0303\x05"+
		"\u01B0\xD9\x02\u0303\u0304\x05\u012E\x98\x02\u0304\u0323\x03\x02\x02\x02"+
		"\u0305\u0309\x05\u0196\xCC\x02\u0306\u0307\x05\u012E\x98\x02\u0307\u0308"+
		"\x07\x12\x02\x02\u0308\u030A\x03\x02\x02\x02\u0309\u0306\x03\x02\x02\x02"+
		"\u0309\u030A\x03\x02\x02\x02\u030A\u030B\x03\x02\x02\x02\u030B\u030C\x05"+
		"\u0144\xA3\x02\u030C\u0323\x03\x02\x02\x02\u030D\u030E\x05\u0156\xAC\x02"+
		"\u030E\u030F\x05\u01B2\xDA\x02\u030F\u0323\x03\x02\x02\x02\u0310\u0311"+
		"\x05\u01B0\xD9\x02\u0311\u0312\x05\u012E\x98\x02\u0312\u0323\x03\x02\x02"+
		"\x02\u0313\u0315\x05\u01F4\xFB\x02\u0314\u0313\x03\x02\x02\x02\u0314\u0315"+
		"\x03\x02\x02\x02\u0315\u0319\x03\x02\x02\x02\u0316\u0317\x05\u012E\x98"+
		"\x02\u0317\u0318\x07\x12\x02\x02\u0318\u031A\x03\x02\x02\x02\u0319\u0316"+
		"\x03\x02\x02\x02\u0319\u031A\x03\x02\x02\x02\u031A\u031B\x03\x02\x02\x02"+
		"\u031B\u0323\x05\u0130\x99\x02\u031C\u031D\x05\u0156\xAC\x02\u031D\u031E"+
		"\x05\u01E4\xF3\x02\u031E\u0323\x03\x02\x02\x02\u031F\u0320\x05\u01E2\xF2"+
		"\x02\u0320\u0321\x05\u0138\x9D\x02\u0321\u0323\x03\x02\x02\x02\u0322\u02FC"+
		"\x03\x02\x02\x02\u0322\u02FF\x03\x02\x02\x02\u0322\u0305\x03\x02\x02\x02"+
		"\u0322\u030D\x03\x02\x02\x02\u0322\u0310\x03\x02\x02\x02\u0322\u0314\x03"+
		"\x02\x02\x02\u0322\u031C\x03\x02\x02\x02\u0322\u031F\x03\x02\x02\x02\u0323"+
		"\x19\x03\x02\x02\x02\u0324\u0325\x05\u017A\xBE\x02\u0325\u0327\x05\u0208"+
		"\u0105\x02\u0326\u0328\x05\xF6|\x02\u0327\u0326\x03\x02\x02\x02\u0327"+
		"\u0328\x03\x02\x02\x02\u0328\u0329\x03\x02\x02\x02\u0329\u032A\x05\u0148"+
		"\xA5\x02\u032A\u032B\x05\u0214\u010B\x02\u032B\u032C\x05\u01D6\xEC\x02"+
		"\u032C\u032F\x05\u0128\x95\x02\u032D\u0330\x05\u01F2\xFA\x02\u032E\u0330"+
		"\x05\u01C2\xE2\x02\u032F\u032D\x03\x02\x02\x02\u032F\u032E\x03\x02\x02"+
		"\x02\u032F\u0330\x03\x02\x02\x02\u0330\x1B\x03\x02\x02\x02\u0331\u0332"+
		"\x05\u017A\xBE\x02\u0332\u0334\x05\u01E2\xF2\x02\u0333\u0335\x05\xF6|"+
		"\x02\u0334\u0333\x03\x02\x02\x02\u0334\u0335\x03\x02\x02\x02\u0335\u0336"+
		"\x03\x02\x02\x02\u0336\u0338\x05\u0138\x9D\x02\u0337\u0339\x05n8\x02\u0338"+
		"\u0337\x03\x02\x02\x02\u0338\u0339\x03\x02\x02\x02\u0339\x1D\x03\x02\x02"+
		"\x02\u033A\u033B\x05\u017A\xBE\x02\u033B\u033D\x05\u0200\u0101\x02\u033C"+
		"\u033E\x05\xF6|\x02\u033D\u033C\x03\x02\x02\x02\u033D\u033E\x03\x02\x02"+
		"\x02\u033E\u0342\x03\x02\x02\x02\u033F\u0340\x05\u012E\x98\x02\u0340\u0341"+
		"\x07\x12\x02\x02\u0341\u0343\x03\x02\x02\x02\u0342\u033F\x03\x02\x02\x02"+
		"\u0342\u0343\x03\x02\x02\x02\u0343\u0344\x03\x02\x02\x02\u0344\u0345\x05"+
		"\u0140\xA1\x02\u0345\u0346\x05\u025C\u012F\x02\u0346\u0347\x05 \x11\x02"+
		"\u0347\u0348\x05\u025E\u0130\x02\u0348\x1F\x03\x02\x02\x02\u0349\u034A"+
		"\x05\u0132\x9A\x02\u034A\u0351\x05\u0134\x9B\x02\u034B\u034C\x05\u026C"+
		"\u0137\x02\u034C\u034D\x05\u0132\x9A\x02\u034D\u034E\x05\u0134\x9B\x02"+
		"\u034E\u0350\x03\x02\x02\x02\u034F\u034B\x03\x02\x02\x02\u0350\u0353\x03"+
		"\x02\x02\x02\u0351\u034F\x03\x02\x02\x02\u0351\u0352\x03\x02\x02\x02\u0352"+
		"!\x03\x02\x02\x02\u0353\u0351\x03\x02\x02\x02\u0354\u0355\x05\u017A\xBE"+
		"\x02\u0355\u0357\x05\u01FA\xFE\x02\u0356\u0358\x05\xF6|\x02\u0357\u0356"+
		"\x03\x02\x02\x02\u0357\u0358\x03\x02\x02\x02\u0358\u035C\x03\x02\x02\x02"+
		"\u0359\u035A\x05\u012E\x98\x02\u035A\u035B\x07\x12\x02\x02\u035B\u035D"+
		"\x03\x02\x02\x02\u035C\u0359\x03\x02\x02\x02\u035C\u035D\x03\x02\x02\x02"+
		"\u035D\u035E\x03\x02\x02\x02\u035E\u035F\x05\u013A\x9E\x02\u035F\u0360"+
		"\x05\u020C\u0107\x02\u0360\u0361\x05\u013C\x9F\x02\u0361#\x03\x02\x02"+
		"\x02\u0362\u0363\x05\u017A\xBE\x02\u0363\u0364\x05\u01BE\xE0\x02\u0364"+
		"\u0366\x05\u0210\u0109\x02\u0365\u0367\x05\xF6|\x02\u0366\u0365\x03\x02"+
		"\x02\x02\u0366\u0367\x03\x02\x02\x02\u0367\u036B\x03\x02\x02\x02\u0368"+
		"\u0369\x05\u012E\x98\x02\u0369\u036A\x07\x12\x02\x02\u036A\u036C\x03\x02"+
		"\x02\x02\u036B\u0368\x03\x02\x02\x02\u036B\u036C\x03\x02\x02\x02\u036C"+
		"\u036D\x03\x02\x02\x02\u036D\u036E\x05\u013E\xA0\x02\u036E\u036F\x05\u0164"+
		"\xB3\x02\u036F\u0370\x05\u01E6\xF4\x02\u0370\u0371\x05\xFE\x80\x02\u0371"+
		"\u0375\x05\u0192\xCA\x02\u0372\u0373\x05\u012E\x98\x02\u0373\u0374\x07"+
		"\x12\x02\x02\u0374\u0376\x03\x02\x02\x02\u0375\u0372\x03\x02\x02\x02\u0375"+
		"\u0376\x03\x02\x02\x02\u0376\u0377\x03\x02\x02\x02\u0377\u0378\x05\u0130"+
		"\x99\x02\u0378\u0379\x05&\x14\x02\u0379\u037A\x05\u01D8\xED\x02\u037A"+
		"\u037B\x05\u01AC\xD7\x02\u037B\u037C\x05\u025C\u012F\x02\u037C\u037D\x05"+
		"\xFE\x80\x02\u037D\u0381\x05\u025E\u0130\x02\u037E\u037F\x05\u0214\u010B"+
		"\x02\u037F\u0380\x05,\x17\x02\u0380\u0382\x03\x02\x02\x02\u0381\u037E"+
		"\x03\x02\x02\x02\u0381\u0382\x03\x02\x02\x02\u0382%\x03\x02\x02\x02\u0383"+
		"\u0384\x05\u0212\u010A\x02\u0384\u0388\x05(\x15\x02\u0385\u0386\x05\u0160"+
		"\xB1\x02\u0386\u0387\x05\u0114\x8B\x02\u0387\u0389\x03\x02\x02\x02\u0388"+
		"\u0385\x03\x02\x02\x02\u0388\u0389\x03\x02\x02\x02\u0389\'\x03\x02\x02"+
		"\x02\u038A\u0390\x05*\x16\x02\u038B\u038C\x05\u0160\xB1\x02\u038C\u038D"+
		"\x05*\x16\x02\u038D\u038F\x03\x02\x02\x02\u038E\u038B\x03\x02\x02\x02"+
		"\u038F\u0392\x03\x02\x02\x02\u0390\u038E\x03\x02\x02\x02\u0390\u0391\x03"+
		"\x02\x02\x02\u0391)\x03\x02\x02\x02\u0392\u0390\x03\x02\x02\x02\u0393"+
		"\u0394\x05\u0132\x9A\x02\u0394\u0395\x05\u01AA\xD6\x02\u0395\u0396\x05"+
		"\u01C6\xE4\x02\u0396\u0397\x05\u01C8\xE5\x02\u0397+\x03\x02\x02\x02\u0398"+
		"\u039F\x05\x8EH\x02\u0399\u039A\x05\x8EH\x02\u039A\u039B\x05\u0160\xB1"+
		"\x02\u039B\u039C\x05\x8CG\x02\u039C\u039F\x03\x02\x02\x02\u039D\u039F"+
		"\x05\x8CG\x02\u039E\u0398\x03\x02\x02\x02\u039E\u0399\x03\x02\x02\x02"+
		"\u039E\u039D\x03\x02\x02\x02\u039F-\x03\x02\x02\x02\u03A0\u03A1\x05\u017A"+
		"\xBE\x02\u03A1\u03A3\x05\u01B0\xD9\x02\u03A2\u03A4\x05\xF6|\x02\u03A3"+
		"\u03A2\x03\x02\x02\x02\u03A3\u03A4\x03\x02\x02\x02\u03A4\u03A5\x03\x02"+
		"\x02\x02\u03A5\u03A6\x05\u012E\x98\x02\u03A6\u03A7\x05\u0214\u010B\x02"+
		"\u03A7\u03A8\x05\u01DE\xF0\x02\u03A8\u03A9\x07\xAD\x02";
	private static readonly _serializedATNSegment2: string =
		"\x02\u03A9\u03AA\x05\u0260\u0131\x02\u03AA\u03AB\x05\xBE`\x02\u03AB\u03AF"+
		"\x05\u0262\u0132\x02\u03AC\u03AD\x05\u0160\xB1\x02\u03AD\u03AE\x05\xC2"+
		"b\x02\u03AE\u03B0\x03\x02\x02\x02\u03AF\u03AC\x03\x02\x02\x02\u03AF\u03B0"+
		"\x03\x02\x02\x02\u03B0/\x03\x02\x02\x02\u03B1\u03B3\x05\u017A\xBE\x02"+
		"\u03B2\u03B4\x05D#\x02\u03B3\u03B2\x03\x02\x02\x02\u03B3\u03B4\x03\x02"+
		"\x02\x02\u03B4\u03B5\x03\x02\x02\x02\u03B5\u03B7\x05\u0196\xCC\x02\u03B6"+
		"\u03B8\x05\xF6|\x02\u03B7\u03B6\x03\x02\x02\x02\u03B7\u03B8\x03\x02\x02"+
		"\x02\u03B8\u03BC\x03\x02\x02\x02\u03B9\u03BA\x05\u012E\x98\x02\u03BA\u03BB"+
		"\x07\x12\x02\x02\u03BB\u03BD\x03\x02\x02\x02\u03BC\u03B9\x03\x02\x02\x02"+
		"\u03BC\u03BD\x03\x02\x02\x02\u03BD\u03BE\x03\x02\x02\x02\u03BE\u03BF\x05"+
		"\u0144\xA3\x02\u03BF\u03C1\x05\u025C\u012F\x02\u03C0\u03C2\x054\x1B\x02"+
		"\u03C1\u03C0\x03\x02\x02\x02\u03C1\u03C2\x03\x02\x02\x02\u03C2\u03C3\x03"+
		"\x02\x02\x02\u03C3\u03C4\x05\u025E\u0130\x02\u03C4\u03C5\x056\x1C\x02"+
		"\u03C5\u03C6\x05\u01E0\xF1\x02\u03C6\u03C7\x05\u0134\x9B\x02\u03C7\u03C8"+
		"\x05\u01B4\xDB\x02\u03C8\u03C9\x05\u0146\xA4\x02\u03C9\u03CA\x05\u0164"+
		"\xB3\x02\u03CA\u03CB\x052\x1A\x02\u03CB1\x03\x02\x02\x02\u03CC\u03CD\x07"+
		"\xA5\x02\x02\u03CD3\x03\x02\x02\x02\u03CE\u03D4\x05\u014E\xA8\x02\u03CF"+
		"\u03D0\x05\u026C\u0137\x02\u03D0\u03D1\x05\u014E\xA8\x02\u03D1\u03D3\x03"+
		"\x02\x02\x02\u03D2\u03CF\x03\x02\x02\x02\u03D3\u03D6\x03\x02\x02\x02\u03D4"+
		"\u03D2\x03\x02\x02\x02\u03D4\u03D5\x03\x02\x02\x02\u03D55\x03\x02\x02"+
		"\x02\u03D6\u03D4\x03\x02\x02\x02\u03D7\u03DC\x05\u0170\xB9\x02\u03D8\u03D9"+
		"\x05\u01E0\xF1\x02\u03D9\u03DA\x05\u01C8\xE5\x02\u03DA\u03DC\x03\x02\x02"+
		"\x02\u03DB\u03D7\x03\x02\x02\x02\u03DB\u03D8\x03\x02\x02\x02\u03DC\u03DD"+
		"\x03\x02\x02\x02\u03DD\u03DE\x05\u01CC\xE7\x02\u03DE\u03DF\x05\u01C8\xE5"+
		"\x02\u03DF\u03E0\x05\u01A4\xD3\x02\u03E07\x03\x02\x02\x02\u03E1\u03E3"+
		"\x05\u017A\xBE\x02\u03E2\u03E4\x05D#\x02\u03E3\u03E2\x03\x02\x02\x02\u03E3"+
		"\u03E4\x03\x02\x02\x02\u03E4\u03E5\x03\x02\x02\x02\u03E5\u03E7\x05\u0154"+
		"\xAB\x02\u03E6\u03E8\x05\xF6|\x02\u03E7\u03E6\x03\x02\x02\x02\u03E7\u03E8"+
		"\x03\x02\x02\x02\u03E8\u03EC\x03\x02\x02\x02\u03E9\u03EA\x05\u012E\x98"+
		"\x02\u03EA\u03EB\x07\x12\x02\x02\u03EB\u03ED\x03\x02\x02\x02\u03EC\u03E9"+
		"\x03\x02\x02\x02\u03EC\u03ED\x03\x02\x02\x02\u03ED\u03EE\x03\x02\x02\x02"+
		"\u03EE\u03EF\x05\u0142\xA2\x02\u03EF\u03F0\x05\u025C\u012F\x02\u03F0\u03F1"+
		"\x05\u0134\x9B\x02\u03F1\u03F2\x05\u025E\u0130\x02\u03F2\u03F3\x05\u01EA"+
		"\xF6\x02\u03F3\u03F4\x05\u0144\xA3\x02\u03F4\u03F5\x05\u01F0\xF9\x02\u03F5"+
		"\u03F6\x05\u0134\x9B\x02\u03F6\u03F7\x05\u0190\xC9\x02\u03F7\u03F8\x05"+
		"\u0144\xA3\x02\u03F8\u03F9\x05\u01A2\xD2\x02\u03F9\u03FA\x05:\x1E\x02"+
		"\u03FA9\x03\x02\x02\x02\u03FB\u0400\x05\u0120\x91\x02\u03FC\u0400\x05"+
		"B\"\x02\u03FD\u0400\x05@!\x02\u03FE\u0400\x05<\x1F\x02\u03FF\u03FB\x03"+
		"\x02\x02\x02\u03FF\u03FC\x03\x02\x02\x02\u03FF\u03FD\x03\x02\x02\x02\u03FF"+
		"\u03FE\x03\x02\x02\x02\u0400;\x03\x02\x02\x02\u0401\u0402\x05\u0260\u0131"+
		"\x02\u0402\u0408\x05> \x02\u0403\u0404\x05\u026C\u0137\x02\u0404\u0405"+
		"\x05> \x02\u0405\u0407\x03\x02\x02\x02\u0406\u0403\x03\x02\x02\x02\u0407"+
		"\u040A\x03\x02\x02\x02\u0408\u0406\x03\x02\x02\x02\u0408\u0409\x03\x02"+
		"\x02\x02\u0409\u040B\x03\x02\x02\x02\u040A\u0408\x03\x02\x02\x02\u040B"+
		"\u040C\x05\u0262\u0132\x02\u040C=\x03\x02\x02\x02\u040D\u040E\x05\u014C"+
		"\xA7\x02\u040E\u040F\x07\v\x02\x02\u040F\u0410\x05:\x1E\x02\u0410?\x03"+
		"\x02\x02\x02\u0411\u0412\x05\u025C\u012F\x02\u0412\u0419\x05B\"\x02\u0413"+
		"\u0414\x05\u026C\u0137\x02\u0414\u0415\x05\u0120\x91\x02\u0415\u0418\x03"+
		"\x02\x02\x02\u0416\u0418\x05B\"\x02\u0417\u0413\x03\x02\x02\x02\u0417"+
		"\u0416\x03\x02\x02\x02\u0418\u041B\x03\x02\x02\x02\u0419\u0417\x03\x02"+
		"\x02\x02\u0419\u041A\x03\x02\x02\x02\u041A\u041C\x03\x02\x02\x02\u041B"+
		"\u0419\x03\x02\x02\x02\u041C\u041D\x05\u025E\u0130\x02\u041DA\x03\x02"+
		"\x02\x02\u041E\u041F\x05\u025C\u012F\x02\u041F\u0425\x05\u0120\x91\x02"+
		"\u0420\u0421\x05\u026C\u0137\x02\u0421\u0422\x05\u0120\x91\x02\u0422\u0424"+
		"\x03\x02\x02\x02\u0423\u0420\x03\x02\x02\x02\u0424\u0427\x03\x02\x02\x02"+
		"\u0425\u0423\x03\x02\x02\x02\u0425\u0426\x03\x02\x02\x02\u0426\u0428\x03"+
		"\x02\x02\x02\u0427\u0425\x03\x02\x02\x02\u0428\u0429\x05\u025E\u0130\x02"+
		"\u0429C\x03\x02\x02\x02\u042A\u042B\x05\u01D0\xE9\x02\u042B\u042C\x05"+
		"\u01DC\xEF\x02\u042CE\x03\x02\x02\x02\u042D\u042E\x05\u015E\xB0\x02\u042E"+
		"\u042F\x05\u0208\u0105\x02\u042F\u0430\x05\u0148\xA5\x02\u0430\u0431\x05"+
		"\u0214\u010B\x02\u0431\u0433\x05H%\x02\u0432\u0434\x05J&\x02\u0433\u0432"+
		"\x03\x02\x02\x02\u0433\u0434\x03\x02\x02\x02\u0434G\x03\x02\x02\x02\u0435"+
		"\u0436\x05\u01D6\xEC\x02\u0436\u0437\x05\u0128\x95\x02\u0437I\x03\x02"+
		"\x02\x02\u0438\u043B\x05\u01F2\xFA\x02\u0439\u043B\x05\u01C2\xE2\x02\u043A"+
		"\u0438\x03\x02\x02\x02\u043A\u0439\x03\x02\x02\x02\u043BK\x03\x02\x02"+
		"\x02\u043C\u043D\x05\u015E\xB0\x02\u043D\u0441\x05\u0200\u0101\x02\u043E"+
		"\u043F\x05\u012E\x98\x02\u043F\u0440\x07\x12\x02\x02\u0440\u0442\x03\x02"+
		"\x02\x02\u0441\u043E\x03\x02\x02\x02\u0441\u0442\x03\x02\x02\x02\u0442"+
		"\u0443\x03\x02\x02\x02\u0443\u0444\x05\u0140\xA1\x02\u0444\u0445\x05N"+
		"(\x02\u0445M\x03\x02\x02\x02\u0446\u044A\x05X-\x02\u0447\u044A\x05V,\x02"+
		"\u0448\u044A\x05P)\x02\u0449\u0446\x03\x02\x02\x02\u0449\u0447\x03\x02"+
		"\x02\x02\u0449\u0448\x03\x02\x02\x02\u044AO\x03\x02\x02\x02\u044B\u044C"+
		"\x05\u01DA\xEE\x02\u044C\u044D\x05R*\x02\u044DQ\x03\x02\x02\x02\u044E"+
		"\u0454\x05T+\x02\u044F\u0450\x05\u0160\xB1\x02\u0450\u0451\x05T+\x02\u0451"+
		"\u0453\x03\x02\x02\x02\u0452\u044F\x03\x02\x02\x02\u0453\u0456\x03\x02"+
		"\x02\x02\u0454\u0452\x03\x02\x02\x02\u0454\u0455\x03\x02\x02\x02\u0455"+
		"S\x03\x02\x02\x02\u0456\u0454\x03\x02\x02\x02\u0457\u0458\x05\u0132\x9A"+
		"\x02\u0458\u0459\x05\u01F8\xFD\x02\u0459\u045A\x05\u0132\x9A\x02\u045A"+
		"U\x03\x02\x02\x02\u045B\u045C\x05\u0152\xAA\x02\u045C\u045D\x05\u0132"+
		"\x9A\x02\u045D\u0464\x05\u0134\x9B\x02\u045E\u045F\x05\u026C\u0137\x02"+
		"\u045F\u0460\x05\u0132\x9A\x02\u0460\u0461\x05\u0134\x9B\x02\u0461\u0463"+
		"\x03\x02\x02\x02\u0462\u045E\x03\x02\x02\x02\u0463\u0466\x03\x02\x02\x02"+
		"\u0464\u0462\x03\x02\x02\x02\u0464\u0465\x03\x02\x02\x02\u0465W\x03\x02"+
		"\x02\x02\u0466\u0464\x03\x02\x02\x02\u0467\u0468\x05\u015E\xB0\x02\u0468"+
		"\u0469\x05\u0132\x9A\x02\u0469\u046A\x05\u0200\u0101\x02\u046A\u046B\x05"+
		"\u0134\x9B\x02\u046BY\x03\x02\x02\x02\u046C\u046D\x05\u015E\xB0\x02\u046D"+
		"\u0471\x05\u01F4\xFB\x02\u046E\u046F\x05\u012E\x98\x02\u046F\u0470\x07"+
		"\x12\x02\x02\u0470\u0472\x03\x02\x02\x02\u0471\u046E\x03\x02\x02\x02\u0471"+
		"\u0472\x03\x02\x02\x02\u0472\u0473\x03\x02\x02\x02\u0473\u0474\x05\u0130"+
		"\x99\x02\u0474\u0475\x05\\/\x02\u0475[\x03\x02\x02\x02\u0476\u047D\x05"+
		"h5\x02\u0477\u047D\x05d3\x02\u0478\u047D\x05d3\x02\u0479\u047D\x05b2\x02"+
		"\u047A\u047D\x05`1\x02\u047B\u047D\x05^0\x02\u047C\u0476\x03\x02\x02\x02"+
		"\u047C\u0477\x03\x02\x02\x02\u047C\u0478\x03\x02\x02\x02\u047C\u0479\x03"+
		"\x02\x02\x02\u047C\u047A\x03\x02\x02\x02\u047C\u047B\x03\x02\x02\x02\u047D"+
		"]\x03\x02\x02\x02\u047E\u047F\x05\u0214\u010B\x02\u047F\u0480\x05\x8E"+
		"H\x02\u0480_\x03\x02\x02\x02\u0481\u0482\x05\u01DA\xEE\x02\u0482\u0483"+
		"\x05\u0132\x9A\x02\u0483\u0484\x05\u01F8\xFD\x02\u0484\u0485\x05\u0132"+
		"\x9A\x02\u0485a\x03\x02\x02\x02\u0486\u0487\x05\u0184\xC3\x02\u0487\u0488"+
		"\x05\u0174\xBB\x02\u0488\u0489\x05\u01EE\xF8\x02\u0489c\x03\x02\x02\x02"+
		"\u048A\u048B\x05\u0184\xC3\x02\u048B\u048C\x05f4\x02\u048Ce\x03\x02\x02"+
		"\x02\u048D\u0493\x05\u0132\x9A\x02\u048E\u048F\x05\u026C\u0137\x02\u048F"+
		"\u0490\x05\u0132\x9A\x02\u0490\u0492\x03\x02\x02\x02\u0491\u048E\x03\x02"+
		"\x02\x02\u0492\u0495\x03\x02\x02\x02\u0493\u0491\x03\x02\x02\x02\u0493"+
		"\u0494\x03\x02\x02\x02\u0494g\x03\x02\x02\x02\u0495\u0493\x03\x02\x02"+
		"\x02\u0496\u0497\x05\u0152\xAA\x02\u0497\u0498\x05j6\x02\u0498i\x03\x02"+
		"\x02\x02\u0499\u049A\x05\u0132\x9A\x02\u049A\u04A1\x05\u0134\x9B\x02\u049B"+
		"\u049C\x05\u026C\u0137\x02\u049C\u049D\x05\u0132\x9A\x02\u049D\u049E\x05"+
		"\u0134\x9B\x02\u049E\u04A0\x03\x02\x02\x02\u049F\u049B\x03\x02\x02\x02"+
		"\u04A0\u04A3\x03\x02\x02\x02\u04A1\u049F\x03\x02\x02\x02\u04A1\u04A2\x03"+
		"\x02\x02\x02\u04A2k\x03\x02\x02\x02\u04A3\u04A1\x03\x02\x02\x02\u04A4"+
		"\u04A5\x05\u015E\xB0\x02\u04A5\u04A6\x05\u01E2\xF2\x02\u04A6\u04A8\x05"+
		"\u0138\x9D\x02\u04A7\u04A9\x05n8\x02\u04A8\u04A7\x03\x02\x02\x02\u04A8"+
		"\u04A9\x03\x02\x02\x02\u04A9m\x03\x02\x02\x02\u04AA\u04AB\x05\u0214\u010B"+
		"\x02\u04AB\u04B1\x05p9\x02\u04AC\u04AD\x05\u0160\xB1\x02\u04AD\u04AE\x05"+
		"p9\x02\u04AE\u04B0\x03\x02\x02\x02\u04AF\u04AC\x03\x02\x02\x02\u04B0\u04B3"+
		"\x03\x02\x02\x02\u04B1\u04AF\x03\x02\x02\x02\u04B1\u04B2\x03\x02\x02\x02"+
		"\u04B2o\x03\x02\x02\x02\u04B3\u04B1\x03\x02\x02\x02\u04B4\u04B5\x05\u01D6"+
		"\xEC\x02\u04B5\u04B6\x07\xAD\x02\x02\u04B6\u04B7\x05\u0128\x95\x02\u04B7"+
		"\u04C5\x03\x02\x02\x02\u04B8\u04B9\x05\u01BC\xDF\x02\u04B9\u04BA\x07\xAD"+
		"\x02\x02\u04BA\u04BB\x05\u012A\x96\x02\u04BB\u04C5\x03\x02\x02\x02\u04BC"+
		"\u04BD\x05\u01F2\xFA\x02\u04BD\u04BE\x07\xAD\x02\x02\u04BE\u04BF\x05\u012A"+
		"\x96\x02\u04BF\u04C5\x03\x02\x02\x02\u04C0\u04C1\x05\u01CE\xE8\x02\u04C1"+
		"\u04C2\x07\xAD\x02\x02\u04C2\u04C3\x05\x96L\x02\u04C3\u04C5\x03\x02\x02"+
		"\x02\u04C4\u04B4\x03\x02\x02\x02\u04C4\u04B8\x03\x02\x02\x02\u04C4\u04BC"+
		"\x03\x02\x02\x02\u04C4\u04C0\x03\x02\x02\x02\u04C5q\x03\x02\x02\x02\u04C6"+
		"\u04C7\x05\u015E\xB0\x02\u04C7\u04C8\x05\u01BE\xE0\x02\u04C8\u04CC\x05"+
		"\u0210\u0109\x02\u04C9\u04CA\x05\u012E\x98\x02\u04CA\u04CB\x07\x12\x02"+
		"\x02\u04CB\u04CD\x03\x02\x02\x02\u04CC\u04C9\x03\x02\x02\x02\u04CC\u04CD"+
		"\x03\x02\x02\x02\u04CD\u04CE\x03\x02\x02\x02\u04CE\u04D2\x05\u013E\xA0"+
		"\x02\u04CF\u04D0\x05\u0214\u010B\x02\u04D0\u04D1\x05\x8EH\x02\u04D1\u04D3"+
		"\x03\x02\x02\x02\u04D2\u04CF\x03\x02\x02\x02\u04D2\u04D3\x03\x02\x02\x02"+
		"\u04D3s\x03\x02\x02\x02\u04D4\u04D5\x05\u0184\xC3\x02\u04D5\u04D7\x05"+
		"\u0208\u0105\x02\u04D6\u04D8\x05\xF8}\x02\u04D7\u04D6\x03\x02\x02\x02"+
		"\u04D7\u04D8\x03\x02\x02\x02\u04D8\u04D9\x03\x02\x02\x02\u04D9\u04DA\x05"+
		"\u0148\xA5\x02\u04DAu\x03\x02\x02\x02\u04DB\u04DC\x05\u0184\xC3\x02\u04DC"+
		"\u04DE\x05\u0200\u0101\x02\u04DD\u04DF\x05\xF8}\x02\u04DE\u04DD\x03\x02"+
		"\x02\x02\u04DE\u04DF\x03\x02\x02\x02\u04DF\u04E3\x03\x02\x02\x02\u04E0"+
		"\u04E1\x05\u012E\x98\x02\u04E1\u04E2\x07\x12\x02\x02\u04E2\u04E4\x03\x02"+
		"\x02\x02\u04E3\u04E0\x03\x02\x02\x02\u04E3\u04E4\x03\x02\x02\x02\u04E4"+
		"\u04E5\x03\x02\x02\x02\u04E5\u04E6\x05\u0140\xA1\x02\u04E6w\x03\x02\x02"+
		"\x02\u04E7\u04E8\x05\u0184\xC3\x02\u04E8\u04E9\x05\u01BE\xE0\x02\u04E9"+
		"\u04EB\x05\u0210\u0109\x02\u04EA\u04EC\x05\xF8}\x02\u04EB\u04EA\x03\x02"+
		"\x02\x02\u04EB\u04EC\x03\x02\x02\x02\u04EC\u04F0\x03\x02\x02\x02\u04ED"+
		"\u04EE\x05\u012E\x98\x02\u04EE\u04EF\x07\x12\x02\x02\u04EF\u04F1\x03\x02"+
		"\x02\x02\u04F0\u04ED\x03\x02\x02\x02\u04F0\u04F1\x03\x02\x02\x02\u04F1"+
		"\u04F2\x03\x02\x02\x02\u04F2\u04F3\x05\u013E\xA0\x02\u04F3y\x03\x02\x02"+
		"\x02\u04F4\u04F5\x05\u0184\xC3\x02\u04F5\u04F7\x05\u0154\xAB\x02\u04F6"+
		"\u04F8\x05\xF8}\x02\u04F7\u04F6\x03\x02\x02\x02\u04F7\u04F8\x03\x02\x02"+
		"\x02\u04F8\u04FC\x03\x02\x02\x02\u04F9\u04FA\x05\u012E\x98\x02\u04FA\u04FB"+
		"\x07\x12\x02\x02\u04FB\u04FD\x03\x02\x02\x02\u04FC\u04F9\x03\x02\x02\x02"+
		"\u04FC\u04FD\x03\x02\x02\x02\u04FD\u04FE\x03\x02\x02\x02\u04FE\u04FF\x05"+
		"\u0142\xA2\x02\u04FF{\x03\x02\x02\x02\u0500\u0501\x05\u0184\xC3\x02\u0501"+
		"\u0503\x05\u0196\xCC\x02\u0502\u0504\x05\xF8}\x02\u0503\u0502\x03\x02"+
		"\x02\x02\u0503\u0504\x03\x02\x02\x02\u0504\u0508\x03\x02\x02\x02\u0505"+
		"\u0506\x05\u012E\x98\x02\u0506\u0507\x07\x12\x02\x02\u0507\u0509\x03\x02"+
		"\x02\x02\u0508\u0505\x03\x02\x02\x02\u0508\u0509\x03\x02\x02\x02\u0509"+
		"\u050A\x03\x02\x02\x02\u050A\u050B\x05\u0144\xA3\x02\u050B}\x03\x02\x02"+
		"\x02\u050C\u050D\x05\u0184\xC3\x02\u050D\u050F\x05\u01FA\xFE\x02\u050E"+
		"\u0510\x05\xF8}\x02\u050F\u050E\x03\x02\x02\x02\u050F\u0510\x03\x02\x02"+
		"\x02\u0510\u0511\x03\x02\x02\x02\u0511\u0512\x05\u013A\x9E\x02\u0512\u0516"+
		"\x05\u01CC\xE7\x02\u0513\u0514\x05\u012E\x98\x02\u0514\u0515\x07\x12\x02"+
		"\x02\u0515\u0517\x03\x02\x02\x02\u0516\u0513\x03\x02\x02\x02\u0516\u0517"+
		"\x03\x02\x02\x02\u0517\u0518\x03\x02\x02\x02\u0518\u0519\x05\u0130\x99"+
		"\x02\u0519\x7F\x03\x02\x02\x02\u051A\u051B\x05\u0184\xC3\x02\u051B\u051D"+
		"\x05\u01E2\xF2\x02\u051C\u051E\x05\xF8}\x02\u051D\u051C\x03\x02\x02\x02"+
		"\u051D\u051E\x03\x02\x02\x02\u051E\u051F\x03\x02\x02\x02\u051F\u0520\x05"+
		"\u0138\x9D\x02\u0520\x81\x03\x02\x02\x02\u0521\u0522\x05\u0184\xC3\x02"+
		"\u0522\u0524\x05\u01F4\xFB\x02\u0523\u0525\x05\xF8}\x02\u0524\u0523\x03"+
		"\x02\x02\x02\u0524\u0525\x03\x02\x02\x02\u0525\u0529\x03\x02\x02\x02\u0526"+
		"\u0527\x05\u012E\x98\x02\u0527\u0528\x07\x12\x02\x02\u0528\u052A\x03\x02"+
		"\x02\x02\u0529\u0526\x03\x02\x02\x02\u0529\u052A\x03\x02\x02\x02\u052A"+
		"\u052B\x03\x02\x02\x02\u052B\u052C\x05\u0130\x99\x02\u052C\x83\x03\x02"+
		"\x02\x02\u052D\u052E\x05\u0184\xC3\x02\u052E\u0530\x05\u01B0\xD9\x02\u052F"+
		"\u0531\x05\xF8}\x02\u0530\u052F\x03\x02\x02\x02\u0530\u0531\x03\x02\x02"+
		"\x02\u0531\u0532\x03\x02\x02\x02\u0532\u0533\x05\u012E\x98\x02\u0533\x85"+
		"\x03\x02\x02\x02\u0534\u0535\x05\u0184\xC3\x02\u0535\u0537\x05\u01A0\xD1"+
		"\x02\u0536\u0538\x05\xF8}\x02\u0537\u0536\x03\x02\x02\x02\u0537\u0538"+
		"\x03\x02\x02\x02\u0538\u053C\x03\x02\x02\x02\u0539\u053A\x05\u012E\x98"+
		"\x02\u053A\u053B\x07\x12\x02\x02\u053B\u053D\x03\x02\x02\x02\u053C\u0539"+
		"\x03\x02\x02\x02\u053C\u053D\x03\x02\x02\x02\u053D\u053E\x03\x02\x02\x02"+
		"\u053E\u053F\x05\xCAf\x02\u053F\x87\x03\x02\x02\x02\u0540\u0541\x05\u017A"+
		"\xBE\x02\u0541\u0543\x05\u01F4\xFB\x02\u0542\u0544\x05\xF6|\x02\u0543"+
		"\u0542\x03\x02\x02\x02\u0543\u0544\x03\x02\x02\x02\u0544\u0548\x03\x02"+
		"\x02\x02\u0545\u0546\x05\u012E\x98\x02\u0546\u0547\x07\x12\x02\x02\u0547"+
		"\u0549\x03\x02\x02\x02\u0548\u0545\x03\x02\x02\x02\u0548\u0549\x03\x02"+
		"\x02\x02\u0549\u054A\x03\x02\x02\x02\u054A\u054B\x05\u0130\x99\x02\u054B"+
		"\u054C\x05\u025C\u012F\x02\u054C\u054D\x05\x9EP\x02\u054D\u054F\x05\u025E"+
		"\u0130\x02\u054E\u0550\x05\x8AF\x02\u054F\u054E\x03\x02\x02\x02\u054F"+
		"\u0550\x03\x02\x02\x02\u0550\x89\x03\x02\x02\x02\u0551\u0553\x05\u0214"+
		"\u010B\x02\u0552\u0554\x05\x8EH\x02\u0553\u0552\x03\x02\x02\x02\u0553"+
		"\u0554\x03\x02\x02\x02\u0554\u0556\x03\x02\x02\x02\u0555\u0557\x05\x8C"+
		"G\x02\u0556\u0555\x03\x02\x02\x02\u0556\u0557\x03\x02\x02\x02\u0557\x8B"+
		"\x03\x02\x02\x02\u0558\u0559\x05\u0172\xBA\x02\u0559\u055A\x05\u01D2\xEA"+
		"\x02\u055A\u055B\x05\u016E\xB8\x02\u055B\u055C\x05\u025C\u012F\x02\u055C"+
		"\u055E\x05\u0132\x9A\x02\u055D\u055F\x05\u0136\x9C\x02\u055E\u055D\x03"+
		"\x02\x02\x02\u055E\u055F\x03\x02\x02\x02\u055F\u0560\x03\x02\x02\x02\u0560"+
		"\u0561\x05\u025E\u0130\x02\u0561\x8D\x03\x02\x02\x02\u0562\u0568\x05\x90"+
		"I\x02\u0563\u0564\x05\u0160\xB1\x02\u0564\u0565\x05\x90I\x02\u0565\u0567"+
		"\x03\x02\x02\x02\u0566\u0563\x03\x02\x02\x02\u0567\u056A\x03\x02\x02\x02"+
		"\u0568\u0566\x03\x02\x02\x02\u0568\u0569\x03\x02\x02\x02\u0569\x8F\x03"+
		"\x02\x02\x02\u056A\u0568\x03\x02\x02\x02\u056B\u056C\x05\x92J\x02\u056C"+
		"\u056D\x07\xAD\x02\x02\u056D\u056E\x05\x94K\x02\u056E\u0574\x03\x02\x02"+
		"\x02\u056F\u0570\x05\x92J\x02\u0570\u0571\x07\xAD\x02\x02\u0571\u0572"+
		"\x05\x96L\x02\u0572\u0574\x03\x02\x02\x02\u0573\u056B\x03\x02\x02\x02"+
		"\u0573\u056F\x03\x02\x02\x02\u0574\x91\x03\x02\x02\x02\u0575\u0576\x07"+
		"\xAB\x02\x02\u0576\x93\x03\x02\x02\x02\u0577\u057A\x05\u0128\x95\x02\u0578"+
		"\u057A\x05\u0126\x94\x02\u0579\u0577\x03\x02\x02\x02\u0579\u0578\x03\x02"+
		"\x02\x02\u057A\x95\x03\x02\x02\x02\u057B\u057C\x05\u0260\u0131\x02\u057C"+
		"\u0582\x05\x98M\x02\u057D\u057E\x05\u026C\u0137\x02\u057E\u057F\x05\x98"+
		"M\x02\u057F\u0581\x03\x02\x02\x02\u0580\u057D\x03\x02\x02\x02\u0581\u0584"+
		"\x03\x02\x02\x02\u0582\u0580\x03\x02\x02\x02\u0582\u0583\x03\x02\x02\x02"+
		"\u0583\u0585\x03\x02\x02\x02\u0584\u0582\x03\x02\x02\x02\u0585\u0586\x05"+
		"\u0262\u0132\x02\u0586\x97\x03\x02\x02\x02\u0587\u0588\x05\x9AN\x02\u0588"+
		"\u0589\x07\v\x02\x02\u0589\u058A\x05\x9CO\x02\u058A\x99\x03\x02\x02\x02"+
		"\u058B\u058C\x05\u0128\x95\x02\u058C\x9B\x03\x02\x02\x02\u058D\u0590\x05"+
		"\u0128\x95\x02\u058E\u0590\x05\u0126\x94\x02\u058F\u058D\x03\x02\x02\x02"+
		"\u058F\u058E\x03\x02\x02\x02\u0590\x9D\x03\x02\x02\x02\u0591\u0597\x05"+
		"\xA0Q\x02\u0592\u0593\x05\u026C\u0137\x02\u0593\u0594\x05\xA0Q\x02\u0594"+
		"\u0596\x03\x02\x02\x02\u0595\u0592\x03\x02\x02\x02\u0596\u0599\x03\x02"+
		"\x02\x02\u0597\u0595\x03\x02\x02\x02\u0597\u0598\x03\x02\x02\x02\u0598"+
		"\u059D\x03\x02\x02\x02\u0599\u0597\x03\x02\x02\x02\u059A\u059B\x05\u026C"+
		"\u0137\x02\u059B\u059C\x05\xA4S\x02\u059C\u059E\x03\x02\x02\x02\u059D"+
		"\u059A\x03\x02\x02\x02\u059D\u059E\x03\x02\x02\x02\u059E\x9F\x03\x02\x02"+
		"\x02\u059F\u05A0\x05\u0132\x9A\x02\u05A0\u05A1\x05\u0134\x9B\x02\u05A1"+
		"\u05A2\x05\xA2R\x02\u05A2\u05AB\x03\x02\x02\x02\u05A3\u05A4\x05\u0132"+
		"\x9A\x02\u05A4\u05A5\x05\u0134\x9B\x02\u05A5\u05A6\x05\u01EC\xF7\x02\u05A6"+
		"\u05AB\x03\x02\x02\x02\u05A7\u05A8\x05\u0132\x9A\x02\u05A8\u05A9\x05\u0134"+
		"\x9B\x02\u05A9\u05AB\x03\x02\x02\x02\u05AA\u059F\x03\x02\x02\x02\u05AA"+
		"\u05A3\x03\x02\x02\x02\u05AA\u05A7\x03\x02\x02\x02\u05AB\xA1\x03\x02\x02"+
		"\x02\u05AC\u05AD\x05\u01D8\xED\x02\u05AD\u05AE\x05\u01AC\xD7\x02\u05AE"+
		"\xA3\x03\x02\x02\x02\u05AF\u05B0\x05\u01D8\xED\x02\u05B0\u05B1\x05\u01AC"+
		"\xD7\x02\u05B1\u05B2\x05\u025C\u012F\x02\u05B2\u05B3\x05\xA6T\x02\u05B3"+
		"\u05B4\x05\u025E\u0130\x02\u05B4\xA5\x03\x02\x02\x02\u05B5\u05B9\x05\xA8"+
		"U\x02\u05B6\u05B9\x05\xAAV\x02\u05B7\u05B9\x05\xACW\x02\u05B8\u05B5\x03"+
		"\x02\x02\x02\u05B8\u05B6\x03\x02\x02\x02\u05B8\u05B7\x03\x02\x02\x02\u05B9"+
		"\xA7\x03\x02\x02\x02\u05BA\u05BB\x05\u0132\x9A\x02\u05BB\xA9\x03\x02\x02"+
		"\x02\u05BC\u05BD\x05\xB2Z\x02\u05BD\u05BE\x05\u026C\u0137\x02\u05BE\u05BF"+
		"\x05\xB0Y\x02\u05BF\xAB\x03\x02\x02\x02\u05C0\u05C1\x05\u025C\u012F\x02"+
		"\u05C1\u05C2\x05\xAEX\x02\u05C2\u05C3\x05\u025E\u0130\x02\u05C3\u05C4"+
		"\x05\u026C\u0137\x02\u05C4\u05C5\x05\xB0Y\x02\u05C5\xAD\x03\x02\x02\x02"+
		"\u05C6\u05CC\x05\xB2Z\x02\u05C7\u05C8\x05\u026C\u0137\x02\u05C8\u05C9"+
		"\x05\xB2Z\x02\u05C9\u05CB\x03\x02\x02\x02\u05CA\u05C7\x03\x02\x02\x02"+
		"\u05CB\u05CE\x03\x02\x02\x02\u05CC\u05CA\x03\x02\x02\x02\u05CC\u05CD\x03"+
		"\x02\x02\x02\u05CD\xAF\x03\x02\x02\x02\u05CE\u05CC\x03\x02\x02\x02\u05CF"+
		"\u05D5\x05\xB4[\x02\u05D0\u05D1\x05\u026C\u0137\x02\u05D1\u05D2\x05\xB4"+
		"[\x02\u05D2\u05D4\x03\x02\x02\x02\u05D3\u05D0\x03\x02\x02\x02\u05D4\u05D7"+
		"\x03\x02\x02\x02\u05D5\u05D3\x03\x02\x02\x02\u05D5\u05D6\x03\x02\x02\x02"+
		"\u05D6\xB1\x03\x02\x02\x02\u05D7\u05D5\x03\x02\x02\x02\u05D8\u05D9\x05"+
		"\u0132\x9A\x02\u05D9\xB3\x03\x02\x02\x02\u05DA\u05DB\x05\u0132\x9A\x02"+
		"\u05DB\xB5\x03\x02\x02\x02\u05DC\u05DD\x05\u0162\xB2\x02\u05DD\u05DE\x05"+
		"\u016A\xB6\x02\u05DE\xB7\x03\x02\x02\x02\u05DF\u05E1\x05\u016C\xB7\x02"+
		"\u05E0\u05E2\x05\xBA^\x02\u05E1\u05E0\x03\x02\x02\x02\u05E1\u05E2\x03"+
		"\x02\x02\x02\u05E2\u05E3\x03\x02\x02\x02\u05E3\u05E5\x05\u016A\xB6\x02"+
		"\u05E4\u05E6\x05\xF4{\x02\u05E5\u05E4\x03\x02\x02\x02\u05E5\u05E6\x03"+
		"\x02\x02\x02\u05E6\xB9\x03\x02\x02\x02\u05E7\u05EA\x05\u01BA\xDE\x02\u05E8"+
		"\u05EA\x05\u0202\u0102\x02\u05E9\u05E7\x03\x02\x02\x02\u05E9\u05E8\x03"+
		"\x02\x02\x02\u05EA\xBB\x03\x02\x02\x02\u05EB\u05EC\x05\u015E\xB0\x02\u05EC"+
		"\u05ED\x05\u01B0\xD9\x02\u05ED\u05EE\x05\u012E\x98\x02\u05EE\u05EF\x05"+
		"\u0214\u010B\x02\u05EF\u05F0\x05\u01DE\xF0\x02\u05F0\u05F1\x07\xAD\x02"+
		"\x02\u05F1\u05F2\x05\u0260\u0131\x02\u05F2\u05F3\x05\xBE`\x02\u05F3\u05F7"+
		"\x05\u0262\u0132\x02\u05F4\u05F5\x05\u0160\xB1\x02\u05F5\u05F6\x05\xC2"+
		"b\x02\u05F6\u05F8\x03\x02\x02\x02\u05F7\u05F4\x03\x02\x02\x02\u05F7\u05F8"+
		"\x03\x02\x02\x02\u05F8\xBD\x03\x02\x02\x02\u05F9\u05FF\x05\xC0a\x02\u05FA"+
		"\u05FB\x05\u026C\u0137\x02\u05FB\u05FC\x05\xC0a\x02\u05FC\u05FE\x03\x02"+
		"\x02\x02\u05FD\u05FA\x03\x02\x02\x02\u05FE\u0601\x03\x02\x02\x02\u05FF"+
		"\u05FD\x03\x02\x02\x02\u05FF\u0600\x03\x02\x02\x02\u0600\xBF\x03\x02\x02"+
		"\x02\u0601\u05FF\x03\x02\x02\x02\u0602\u0603\x07\xA6\x02\x02\u0603\u0604"+
		"\x07\v\x02\x02\u0604\u0609\x07\xA6\x02\x02\u0605\u0606\x07\xA6\x02\x02"+
		"\u0606\u0607\x07\v\x02\x02\u0607\u0609\x07\xA7\x02\x02\u0608\u0602\x03"+
		"\x02\x02\x02\u0608\u0605\x03\x02\x02\x02\u0609\xC1\x03\x02\x02\x02\u060A"+
		"\u060B\x05\u0186\xC4\x02\u060B\u060C\x07\xAD\x02\x02\u060C\u060D\x05\u012A"+
		"\x96\x02\u060D\xC3\x03\x02\x02\x02\u060E\u060F\x05\u0206\u0104\x02\u060F"+
		"\u0610\x05\u012E\x98\x02\u0610\xC5\x03\x02\x02\x02\u0611\u0613\x05\u01FC"+
		"\xFF\x02\u0612\u0614\x05\u01F4\xFB\x02\u0613\u0612\x03\x02\x02\x02\u0613"+
		"\u0614\x03\x02\x02\x02\u0614\u0618\x03\x02\x02\x02\u0615\u0616\x05\u012E"+
		"\x98\x02\u0616\u0617\x07\x12\x02\x02\u0617\u0619\x03\x02\x02\x02\u0618"+
		"\u0615\x03\x02\x02\x02\u0618\u0619\x03\x02\x02\x02\u0619\u061A\x03\x02"+
		"\x02\x02\u061A\u061B\x05\u0130\x99\x02\u061B\xC7\x03\x02\x02\x02\u061C"+
		"\u061D\x05\u017A\xBE\x02\u061D\u061F\x05\u01A0\xD1\x02\u061E\u0620\x05"+
		"\xF6|\x02\u061F\u061E\x03\x02\x02\x02\u061F\u0620\x03\x02\x02\x02\u0620"+
		"\u0622\x03\x02\x02\x02\u0621\u0623\x05\xCAf\x02\u0622\u0621\x03\x02\x02"+
		"\x02\u0622\u0623\x03\x02\x02\x02\u0623\u0624\x03\x02\x02\x02\u0624\u0628"+
		"\x05\u01CC\xE7\x02\u0625\u0626\x05\u012E\x98\x02\u0626\u0627\x07\x12\x02"+
		"\x02\u0627\u0629\x03\x02\x02\x02\u0628\u0625\x03\x02\x02\x02\u0628\u0629"+
		"\x03\x02\x02\x02\u0629\u062A\x03\x02\x02\x02\u062A\u062B\x05\u0130\x99"+
		"\x02\u062B\u062C\x05\u025C\u012F\x02\u062C\u062D\x05\xCCg\x02\u062D\u062E"+
		"\x05\u025E\u0130\x02\u062E\xC9\x03\x02\x02\x02\u062F\u0632\x07\xAB\x02"+
		"\x02\u0630\u0632\x05\u0128\x95\x02\u0631\u062F\x03\x02\x02\x02\u0631\u0630"+
		"\x03\x02\x02\x02\u0632\xCB\x03\x02\x02\x02\u0633\u0638\x05\u0132\x9A\x02"+
		"\u0634\u0638\x05\xCEh\x02\u0635\u0638\x05\xD0i\x02\u0636\u0638\x05\xD2"+
		"j\x02\u0637\u0633\x03\x02\x02\x02\u0637\u0634\x03\x02\x02\x02\u0637\u0635"+
		"\x03\x02\x02\x02\u0637\u0636\x03\x02\x02\x02\u0638\xCD\x03\x02\x02\x02"+
		"\u0639\u063A\x05\u01AE\xD8\x02\u063A\u063B\x05\u025C\u012F\x02\u063B\u063C"+
		"\x07\xAB\x02\x02\u063C\u063D\x05\u025E\u0130\x02\u063D\xCF\x03\x02\x02"+
		"\x02\u063E\u063F\x05\u0188\xC5\x02\u063F\u0640\x05\u025C\u012F\x02\u0640"+
		"\u0641\x07\xAB\x02\x02\u0641\u0642\x05\u025E\u0130\x02\u0642\xD1\x03\x02"+
		"\x02\x02\u0643\u0644\x05\u0194\xCB\x02\u0644\u0645\x05\u025C\u012F\x02"+
		"\u0645\u0646\x07\xAB\x02\x02\u0646\u0647\x05\u025E\u0130\x02\u0647\xD3"+
		"\x03\x02\x02\x02\u0648\u064A\x05\xB8]\x02\u0649\u0648\x03\x02\x02\x02"+
		"\u0649\u064A\x03\x02\x02\x02\u064A\u064B\x03\x02\x02\x02\u064B\u064D\x05"+
		"\u017C\xBF\x02\u064C\u064E\x05\xD6l\x02\u064D\u064C\x03\x02\x02\x02\u064D"+
		"\u064E\x03\x02\x02\x02\u064E\u064F\x03\x02\x02\x02\u064F\u0651\x05\u0106"+
		"\x84\x02\u0650\u0652\x05\xF4{\x02\u0651\u0650\x03\x02\x02\x02\u0651\u0652"+
		"\x03\x02\x02\x02\u0652\u0653\x03\x02\x02\x02\u0653\u0656\x05\u010E\x88"+
		"\x02\u0654\u0657\x05\xF8}\x02\u0655\u0657\x05\xDCo\x02\u0656\u0654\x03"+
		"\x02\x02\x02\u0656\u0655\x03\x02\x02\x02\u0656\u0657\x03\x02\x02\x02\u0657"+
		"\xD5\x03\x02\x02\x02\u0658\u065E\x05\xD8m\x02\u0659\u065A\x05\u026C\u0137"+
		"\x02\u065A\u065B\x05\xD8m\x02\u065B\u065D\x03\x02\x02\x02\u065C\u0659"+
		"\x03\x02\x02\x02\u065D\u0660\x03\x02\x02\x02\u065E\u065C\x03\x02\x02\x02"+
		"\u065E\u065F\x03\x02\x02\x02\u065F\xD7\x03\x02\x02\x02\u0660\u065E\x03"+
		"\x02\x02\x02\u0661\u066B\x07\xAB\x02\x02\u0662\u0663\x07\xAB\x02\x02\u0663"+
		"\u0666\x07\x07\x02\x02\u0664\u0667\x05\u0128\x95\x02\u0665\u0667\x05\u0124"+
		"\x93\x02\u0666\u0664\x03\x02\x02\x02\u0666\u0665\x03\x02\x02\x02\u0667"+
		"\u0668\x03\x02\x02\x02\u0668\u0669\x07\b\x02\x02\u0669\u066B\x03\x02\x02"+
		"\x02\u066A\u0661\x03\x02\x02\x02\u066A\u0662\x03\x02\x02\x02\u066B\xD9"+
		"\x03\x02\x02\x02\u066C\u066E\x05\xB8]\x02\u066D\u066C\x03\x02\x02\x02"+
		"\u066D\u066E\x03\x02\x02\x02\u066E\u066F\x03\x02\x02\x02\u066F\u0673\x05"+
		"\u0204\u0103\x02\u0670\u0671\x05\u012E\x98\x02\u0671\u0672\x07\x12\x02"+
		"\x02\u0672\u0674\x03\x02\x02\x02\u0673\u0670\x03\x02\x02\x02\u0673\u0674"+
		"\x03\x02\x02\x02\u0674\u0675\x03\x02\x02\x02\u0675\u0677\x05\u0130\x99"+
		"\x02\u0676\u0678\x05\xEEx\x02\u0677\u0676\x03\x02\x02\x02\u0677\u0678"+
		"\x03\x02\x02\x02\u0678\u0679\x03\x02\x02\x02\u0679\u067A\x05\u01E8\xF5"+
		"\x02\u067A\u067B\x05\xE2r\x02\u067B\u067E\x05\u010E\x88\x02\u067C\u067F"+
		"\x05\xF8}\x02\u067D\u067F\x05\xDCo\x02\u067E\u067C\x03\x02\x02\x02\u067E"+
		"\u067D\x03\x02\x02\x02\u067E\u067F\x03\x02\x02\x02\u067F\xDB\x03\x02\x02"+
		"\x02\u0680\u0681\x05\u019C\xCF\x02\u0681\u0682\x05\xDEp\x02\u0682\xDD"+
		"\x03\x02\x02\x02\u0683";
	private static readonly _serializedATNSegment3: string =
		"\u0689\x05\xE0q\x02\u0684\u0685\x05\u0160\xB1\x02\u0685\u0686\x05\xE0"+
		"q\x02\u0686\u0688\x03\x02\x02\x02\u0687\u0684\x03\x02\x02\x02\u0688\u068B"+
		"\x03\x02\x02\x02\u0689\u0687\x03\x02\x02\x02\u0689\u068A\x03\x02\x02\x02"+
		"\u068A\xDF\x03\x02\x02\x02\u068B\u0689\x03\x02\x02\x02\u068C\u068D\x07"+
		"\xAB\x02\x02\u068D\u068E\x07\xAD\x02\x02\u068E\u068F\x05\u0120\x91\x02"+
		"\u068F\xE1\x03\x02\x02\x02\u0690\u0696\x05\xE4s\x02\u0691\u0692\x05\u026C"+
		"\u0137\x02\u0692\u0693\x05\xE4s\x02\u0693\u0695\x03\x02\x02\x02\u0694"+
		"\u0691\x03\x02\x02\x02\u0695\u0698\x03\x02\x02\x02\u0696\u0694\x03\x02"+
		"\x02\x02\u0696\u0697\x03\x02\x02\x02\u0697\xE3\x03\x02\x02\x02\u0698\u0696"+
		"\x03\x02\x02\x02\u0699\u069A\x07\xAB\x02\x02\u069A\u069F\x07\xAD\x02\x02"+
		"\u069B\u06A0\x05\u0120\x91\x02\u069C\u06A0\x05\xE8u\x02\u069D\u06A0\x05"+
		"\xE6t\x02\u069E\u06A0\x05\xEAv\x02\u069F\u069B\x03\x02\x02\x02\u069F\u069C"+
		"\x03\x02\x02\x02\u069F\u069D\x03\x02\x02\x02\u069F\u069E\x03\x02\x02\x02"+
		"\u06A0\u06CF\x03\x02\x02\x02\u06A1\u06A2\x07\xAB\x02\x02\u06A2\u06A3\x07"+
		"\xAD\x02\x02\u06A3\u06A4\x07\xAB\x02\x02\u06A4\u06A5\t\x02\x02\x02\u06A5"+
		"\u06CF\x05\u0124\x93\x02\u06A6\u06A7\x07\xAB\x02\x02\u06A7\u06A8\x07\xAD"+
		"\x02\x02\u06A8\u06A9\x07\xAB\x02\x02\u06A9\u06AA\t\x02\x02\x02\u06AA\u06CF"+
		"\x05\xE6t\x02\u06AB\u06AC\x07\xAB\x02\x02\u06AC\u06AD\x07\xAD\x02\x02"+
		"\u06AD\u06AE\x05\xE6t\x02\u06AE\u06AF\t\x02\x02\x02\u06AF\u06B0\x07\xAB"+
		"\x02\x02\u06B0\u06CF\x03\x02\x02\x02\u06B1\u06B2\x07\xAB\x02\x02\u06B2"+
		"\u06B3\x07\xAD\x02\x02\u06B3\u06B4\x07\xAB\x02\x02\u06B4\u06B5\t\x02\x02"+
		"\x02\u06B5\u06CF\x05\xE8u\x02\u06B6\u06B7\x07\xAB\x02\x02\u06B7\u06B8"+
		"\x07\xAD\x02\x02\u06B8\u06B9\x05\xE8u\x02\u06B9\u06BA\t\x02\x02\x02\u06BA"+
		"\u06BB\x07\xAB\x02\x02\u06BB\u06CF\x03\x02\x02\x02\u06BC\u06BD\x07\xAB"+
		"\x02\x02\u06BD\u06BE\x07\xAD\x02\x02\u06BE\u06BF\x07\xAB\x02\x02\u06BF"+
		"\u06C0\t\x02\x02\x02\u06C0\u06CF\x05\xEAv\x02\u06C1\u06C2\x07\xAB\x02"+
		"\x02\u06C2\u06C3\x07\xAD\x02\x02\u06C3\u06C4\x05\xEAv\x02\u06C4\u06C5"+
		"\t\x02\x02\x02\u06C5\u06C6\x07\xAB\x02\x02\u06C6\u06CF\x03\x02\x02\x02"+
		"\u06C7\u06C8\x07\xAB\x02\x02\u06C8\u06C9\x05\u0268\u0135\x02\u06C9\u06CA"+
		"\x05\u0124\x93\x02\u06CA\u06CB\x05\u026A\u0136\x02\u06CB\u06CC\x07\xAD"+
		"\x02\x02\u06CC\u06CD\x05\u0120\x91\x02\u06CD\u06CF\x03\x02\x02\x02\u06CE"+
		"\u0699\x03\x02\x02\x02\u06CE\u06A1\x03\x02\x02\x02\u06CE\u06A6\x03\x02"+
		"\x02\x02\u06CE\u06AB\x03\x02\x02\x02\u06CE\u06B1\x03\x02\x02\x02\u06CE"+
		"\u06B6\x03\x02\x02\x02\u06CE\u06BC\x03\x02\x02\x02\u06CE\u06C1\x03\x02"+
		"\x02\x02\u06CE\u06C7\x03\x02\x02\x02\u06CF\xE5\x03\x02\x02\x02\u06D0\u06D1"+
		"\x05\u0260\u0131\x02\u06D1\u06D7\x05\u0120\x91\x02\u06D2\u06D3\x05\u026C"+
		"\u0137\x02\u06D3\u06D4\x05\u0120\x91\x02\u06D4\u06D6\x03\x02\x02\x02\u06D5"+
		"\u06D2\x03\x02\x02\x02\u06D6\u06D9\x03\x02\x02\x02\u06D7\u06D5\x03\x02"+
		"\x02\x02\u06D7\u06D8\x03\x02\x02\x02\u06D8\u06DA\x03\x02\x02\x02\u06D9"+
		"\u06D7\x03\x02\x02\x02\u06DA\u06DB\x05\u0262\u0132\x02\u06DB\xE7\x03\x02"+
		"\x02\x02\u06DC\u06DD\x05\u0260\u0131\x02\u06DD\u06DE\x05\u0120\x91\x02"+
		"\u06DE\u06DF\x05\u026E\u0138\x02\u06DF\u06E0\x05\u0120\x91\x02\u06E0\u06E7"+
		"\x03\x02\x02\x02\u06E1\u06E2\x05\u0120\x91\x02\u06E2\u06E3\x05\u026E\u0138"+
		"\x02\u06E3\u06E4\x05\u0120\x91\x02\u06E4\u06E6\x03\x02\x02\x02\u06E5\u06E1"+
		"\x03\x02\x02\x02\u06E6\u06E9\x03\x02\x02\x02\u06E7\u06E5\x03\x02\x02\x02"+
		"\u06E7\u06E8\x03\x02\x02\x02\u06E8\u06EA\x03\x02\x02\x02\u06E9\u06E7\x03"+
		"\x02\x02\x02\u06EA\u06EB\x05\u0262\u0132\x02\u06EB\xE9\x03\x02\x02\x02"+
		"\u06EC\u06ED\x05\u0268\u0135\x02\u06ED\u06F3\x05\u0120\x91\x02\u06EE\u06EF"+
		"\x05\u026E\u0138\x02\u06EF\u06F0\x05\u0120\x91\x02\u06F0\u06F2\x03\x02"+
		"\x02\x02\u06F1\u06EE\x03\x02\x02\x02\u06F2\u06F5\x03\x02\x02\x02\u06F3"+
		"\u06F1\x03\x02\x02\x02\u06F3\u06F4\x03\x02\x02\x02\u06F4\u06F6\x03\x02"+
		"\x02\x02\u06F5\u06F3\x03\x02\x02\x02\u06F6\u06F7\x05\u026A\u0136\x02\u06F7"+
		"\xEB\x03\x02\x02\x02\u06F8\u06FB\x05\xB8]\x02\u06F9\u06FB\x03\x02\x02"+
		"\x02\u06FA\u06F8\x03\x02\x02\x02\u06FA\u06F9\x03\x02\x02\x02\u06FB\u06FC"+
		"\x03\x02\x02\x02\u06FC\u06FD\x05\u01A6\xD4\x02\u06FD\u0702\x05\u01A8\xD5"+
		"\x02\u06FE\u06FF\x05\u012E\x98\x02\u06FF\u0700\x07\x12\x02\x02\u0700\u0703"+
		"\x03\x02\x02\x02\u0701\u0703\x03\x02\x02\x02\u0702\u06FE\x03\x02\x02\x02"+
		"\u0702\u0701\x03\x02\x02\x02\u0703\u0704\x03\x02\x02\x02\u0704\u0705\x05"+
		"\u0130\x99\x02\u0705\u0706\x05\xFC\x7F\x02\u0706\u0709\x05\xFA~\x02\u0707"+
		"\u070A\x05\xF6|\x02\u0708\u070A\x03\x02\x02\x02\u0709\u0707\x03\x02\x02"+
		"\x02\u0709\u0708\x03\x02\x02\x02\u070A\u070C\x03\x02\x02\x02\u070B\u070D"+
		"\x05\xEEx\x02\u070C\u070B\x03\x02\x02\x02\u070C\u070D\x03\x02\x02\x02"+
		"\u070D\xED\x03\x02\x02\x02\u070E\u070F\x05\u020C\u0107\x02\u070F\u0710"+
		"\x05\xF2z\x02\u0710\u071F\x03\x02\x02\x02\u0711\u0712\x05\u020C\u0107"+
		"\x02\u0712\u0713\x05\xF2z\x02\u0713\u0714\x05\u0160\xB1\x02\u0714\u0715"+
		"\x05\xF0y\x02\u0715\u071F\x03\x02\x02\x02\u0716\u0717\x05\u020C\u0107"+
		"\x02\u0717\u0718\x05\xF0y\x02\u0718\u071F\x03\x02\x02\x02\u0719\u071A"+
		"\x05\u020C\u0107\x02\u071A\u071B\x05\xF0y\x02\u071B\u071C\x05\u0160\xB1"+
		"\x02\u071C\u071D\x05\xF2z\x02\u071D\u071F\x03\x02\x02\x02\u071E\u070E"+
		"\x03\x02\x02\x02\u071E\u0711\x03\x02\x02\x02\u071E\u0716\x03\x02\x02\x02"+
		"\u071E\u0719\x03\x02\x02\x02\u071F\xEF\x03\x02\x02\x02\u0720\u0721\x05"+
		"\u01F6\xFC\x02\u0721\u0722\x05\u0124\x93\x02\u0722\xF1\x03\x02\x02\x02"+
		"\u0723\u0724\x05\u01FE\u0100\x02\u0724\u0725\x05\u0124\x93\x02\u0725\xF3"+
		"\x03\x02\x02\x02\u0726\u0727\x05\u020C\u0107\x02\u0727\u0728\x05\xF0y"+
		"\x02\u0728\xF5\x03\x02\x02\x02\u0729\u072A\x05\u019C\xCF\x02\u072A\u072B"+
		"\x05\u01C6\xE4\x02\u072B\u072C\x05\u018C\xC7\x02\u072C\xF7\x03\x02\x02"+
		"\x02\u072D\u072E\x05\u019C\xCF\x02\u072E\u072F\x05\u018C\xC7\x02\u072F"+
		"\xF9\x03\x02\x02\x02\u0730\u0731\x05\u020E\u0108\x02\u0731\u0732\x07\x03"+
		"\x02\x02\u0732\u0733\x05\u0100\x81\x02\u0733\u0734\x07\x04\x02\x02\u0734"+
		"\xFB\x03\x02\x02\x02\u0735\u0736\x07\x03\x02\x02\u0736\u0737\x05\xFE\x80"+
		"\x02\u0737\u0738\x07\x04\x02\x02\u0738\xFD\x03\x02\x02\x02\u0739\u073F"+
		"\x05\u0132\x9A\x02\u073A\u073B\x05\u026C\u0137\x02\u073B\u073C\x05\u0132"+
		"\x9A\x02\u073C\u073E\x03\x02\x02\x02\u073D\u073A\x03\x02\x02\x02\u073E"+
		"\u0741\x03\x02\x02\x02\u073F\u073D\x03\x02\x02\x02\u073F\u0740\x03\x02"+
		"\x02\x02\u0740\xFF\x03\x02\x02\x02\u0741\u073F\x03\x02\x02\x02\u0742\u0747"+
		"\x05\u0120\x91\x02\u0743\u0747\x05\xE8u\x02\u0744\u0747\x05\xE6t\x02\u0745"+
		"\u0747\x05\xEAv\x02\u0746\u0742\x03\x02\x02\x02\u0746\u0743\x03\x02\x02"+
		"\x02\u0746\u0744\x03\x02\x02\x02\u0746\u0745\x03\x02\x02\x02\u0747\u0751"+
		"\x03\x02\x02\x02\u0748\u074D\x05\u026C\u0137\x02\u0749\u074E\x05\u0120"+
		"\x91\x02\u074A\u074E\x05\xE8u\x02\u074B\u074E\x05\xE6t\x02\u074C\u074E"+
		"\x05\xEAv\x02\u074D\u0749\x03\x02\x02\x02\u074D\u074A\x03\x02\x02\x02"+
		"\u074D\u074B\x03\x02\x02\x02\u074D\u074C\x03\x02\x02\x02\u074E\u0750\x03"+
		"\x02\x02\x02\u074F\u0748\x03\x02\x02\x02\u0750\u0753\x03\x02\x02\x02\u0751"+
		"\u074F\x03\x02\x02\x02\u0751\u0752\x03\x02\x02\x02\u0752\u0101\x03\x02"+
		"\x02\x02\u0753\u0751\x03\x02\x02\x02\u0754\u0756\x05\u01E6\xF4\x02\u0755"+
		"\u0757\x05\u0182\xC2\x02\u0756\u0755\x03\x02\x02\x02\u0756\u0757\x03\x02"+
		"\x02\x02\u0757\u0758\x03\x02\x02\x02\u0758\u0759\x05\u0110\x89\x02\u0759"+
		"\u075B\x05\u0106\x84\x02\u075A\u075C\x05\u010E\x88\x02\u075B\u075A\x03"+
		"\x02\x02\x02\u075B\u075C\x03\x02\x02\x02\u075C\u075E\x03\x02\x02\x02\u075D"+
		"\u075F\x05\u010A\x86\x02\u075E\u075D\x03\x02\x02\x02\u075E\u075F\x03\x02"+
		"\x02\x02\u075F\u0761\x03\x02\x02\x02\u0760\u0762\x05\u0104\x83\x02\u0761"+
		"\u0760\x03\x02\x02\x02\u0761\u0762\x03\x02\x02\x02\u0762\u0764\x03\x02"+
		"\x02\x02\u0763\u0765\x05\u015C\xAF\x02\u0764\u0763\x03\x02\x02\x02\u0764"+
		"\u0765\x03\x02\x02\x02\u0765\u0103\x03\x02\x02\x02\u0766\u0767\x05\u01B6"+
		"\xDC\x02\u0767\u0768\x05\u0124\x93\x02\u0768\u0105\x03\x02\x02\x02\u0769"+
		"\u076A\x05\u0192\xCA\x02\u076A\u076B\x05\u0108\x85\x02\u076B\u0107\x03"+
		"\x02\x02\x02\u076C\u0772\x05\u0130\x99\x02\u076D\u076E\x05\u012E\x98\x02"+
		"\u076E\u076F\x05\u0258\u012D\x02\u076F\u0770\x05\u0130\x99\x02\u0770\u0772"+
		"\x03\x02\x02\x02\u0771\u076C\x03\x02\x02\x02\u0771\u076D\x03\x02\x02\x02"+
		"\u0772\u0109\x03\x02\x02\x02\u0773\u0774\x05\u01D4\xEB\x02\u0774\u0775"+
		"\x05\u010C\x87\x02\u0775\u010B\x03\x02\x02\x02\u0776\u0779\x05\u0132\x9A"+
		"\x02\u0777\u077A\x05\u0166\xB4\x02\u0778\u077A\x05\u017E\xC0\x02\u0779"+
		"\u0777\x03\x02\x02\x02\u0779\u0778\x03\x02\x02\x02\u0779\u077A\x03\x02"+
		"\x02\x02\u077A\u010D\x03\x02\x02\x02\u077B\u077C\x05\u0212\u010A\x02\u077C"+
		"\u077D\x05\u0114\x8B\x02\u077D\u010F\x03\x02\x02\x02\u077E\u0789\x05\u0256"+
		"\u012C\x02\u077F\u0785\x05\u0112\x8A\x02\u0780\u0781\x05\u026C\u0137\x02"+
		"\u0781\u0782\x05\u0112\x8A\x02\u0782\u0784\x03\x02\x02\x02\u0783\u0780"+
		"\x03\x02\x02\x02\u0784\u0787\x03\x02\x02\x02\u0785\u0783\x03\x02\x02\x02"+
		"\u0785\u0786\x03\x02\x02\x02\u0786\u0789\x03\x02\x02\x02\u0787\u0785\x03"+
		"\x02\x02\x02\u0788\u077E\x03\x02\x02\x02\u0788\u077F\x03\x02\x02\x02\u0789"+
		"\u0111\x03\x02\x02\x02\u078A\u0798\x05\u0132\x9A\x02\u078B\u078F\x05\u0132"+
		"\x9A\x02\u078C\u078D\x05\u0164\xB3\x02\u078D\u078E\x07\xAB\x02\x02\u078E"+
		"\u0790\x03\x02\x02\x02\u078F\u078C\x03\x02\x02\x02\u078F\u0790\x03\x02"+
		"\x02\x02\u0790\u0798\x03\x02\x02\x02\u0791\u0795\x05\u011C\x8F\x02\u0792"+
		"\u0793\x05\u0164\xB3\x02\u0793\u0794\x07\xAB\x02\x02\u0794\u0796\x03\x02"+
		"\x02\x02\u0795\u0792\x03\x02\x02\x02\u0795\u0796\x03\x02\x02\x02\u0796"+
		"\u0798\x03\x02\x02\x02\u0797\u078A\x03\x02\x02\x02\u0797\u078B\x03\x02"+
		"\x02\x02\u0797\u0791\x03\x02\x02\x02\u0798\u0113\x03\x02\x02\x02\u0799"+
		"\u079F\x05\u0116\x8C\x02\u079A\u079B\x05\u0160\xB1\x02\u079B\u079C\x05"+
		"\u0116\x8C\x02\u079C\u079E\x03\x02\x02\x02\u079D\u079A\x03\x02\x02\x02"+
		"\u079E\u07A1\x03\x02\x02\x02\u079F\u079D\x03\x02\x02\x02\u079F\u07A0\x03"+
		"\x02\x02\x02\u07A0\u0115\x03\x02\x02\x02\u07A1\u079F\x03\x02\x02\x02\u07A2"+
		"\u07A8\x05\u0132\x9A\x02\u07A3\u07A9\x05\u0274\u013B\x02\u07A4\u07A9\x05"+
		"\u0276\u013C\x02\u07A5\u07A9\x05\u0278\u013D\x02\u07A6\u07A9\x05\u027A"+
		"\u013E\x02\u07A7\u07A9\x05\u027C\u013F\x02\u07A8\u07A3\x03\x02\x02\x02"+
		"\u07A8\u07A4\x03\x02\x02\x02\u07A8\u07A5\x03\x02\x02\x02\u07A8\u07A6\x03"+
		"\x02\x02\x02\u07A8\u07A7\x03\x02\x02\x02\u07A9\u07AA\x03\x02\x02\x02\u07AA"+
		"\u07AB\x05\u0120\x91\x02\u07AB\u07CB\x03\x02\x02\x02\u07AC\u07B2\x05\u011C"+
		"\x8F\x02\u07AD\u07B3\x05\u0274\u013B\x02\u07AE\u07B3\x05\u0276\u013C\x02"+
		"\u07AF\u07B3\x05\u0278\u013D\x02\u07B0\u07B3\x05\u027A\u013E\x02\u07B1"+
		"\u07B3\x05\u027C\u013F\x02\u07B2\u07AD\x03\x02\x02\x02\u07B2\u07AE\x03"+
		"\x02\x02\x02\u07B2\u07AF\x03\x02\x02\x02\u07B2\u07B0\x03\x02\x02\x02\u07B2"+
		"\u07B1\x03\x02\x02\x02\u07B3\u07B4\x03\x02\x02\x02\u07B4\u07B5\x05\u0120"+
		"\x91\x02\u07B5\u07CB\x03\x02\x02\x02\u07B6\u07BC\x05\u011C\x8F\x02\u07B7"+
		"\u07BD\x05\u0274\u013B\x02\u07B8\u07BD\x05\u0276\u013C\x02\u07B9\u07BD"+
		"\x05\u0278\u013D\x02\u07BA\u07BD\x05\u027A\u013E\x02\u07BB\u07BD\x05\u027C"+
		"\u013F\x02\u07BC\u07B7\x03\x02\x02\x02\u07BC\u07B8\x03\x02\x02\x02\u07BC"+
		"\u07B9\x03\x02\x02\x02\u07BC\u07BA\x03\x02\x02\x02\u07BC\u07BB\x03\x02"+
		"\x02\x02\u07BD\u07BE\x03\x02\x02\x02\u07BE\u07BF\x05\u011C\x8F\x02\u07BF"+
		"\u07CB\x03\x02\x02\x02\u07C0\u07C1\x05\u0132\x9A\x02\u07C1\u07C2\x05\u019E"+
		"\xD0\x02\u07C2\u07C4\x05\u025C\u012F\x02\u07C3\u07C5\x05\u011E\x90\x02"+
		"\u07C4\u07C3\x03\x02\x02\x02\u07C4\u07C5\x03\x02\x02\x02\u07C5\u07C6\x03"+
		"\x02\x02\x02\u07C6\u07C7\x05\u025E\u0130\x02\u07C7\u07CB\x03\x02\x02\x02"+
		"\u07C8\u07CB\x05\u011A\x8E\x02\u07C9\u07CB\x05\u0118\x8D\x02\u07CA\u07A2"+
		"\x03\x02\x02\x02\u07CA\u07AC\x03\x02\x02\x02\u07CA\u07B6\x03\x02\x02\x02"+
		"\u07CA\u07C0\x03\x02\x02\x02\u07CA\u07C8\x03\x02\x02\x02\u07CA\u07C9\x03"+
		"\x02\x02\x02\u07CB\u0117\x03\x02\x02\x02\u07CC\u07CD\x05\u0132\x9A\x02"+
		"\u07CD\u07CE\x05\u0176\xBC\x02\u07CE\u07CF\x05\u0120\x91\x02\u07CF\u0119"+
		"\x03\x02\x02\x02\u07D0\u07D1\x05\u0132\x9A\x02\u07D1\u07D2\x05\u0178\xBD"+
		"\x02\u07D2\u07D3\x05\u0120\x91\x02\u07D3\u011B\x03\x02\x02\x02\u07D4\u07D5"+
		"\x07\xAB\x02\x02\u07D5\u07D6\x07\x03\x02\x02\u07D6\u07D7\x07\x13\x02\x02"+
		"\u07D7\u07DF\x07\x04\x02\x02\u07D8\u07D9\x07\xAB\x02\x02\u07D9\u07DB\x07"+
		"\x03\x02\x02\u07DA\u07DC\x05\u011E\x90\x02\u07DB\u07DA\x03\x02\x02\x02"+
		"\u07DB\u07DC\x03\x02\x02\x02\u07DC\u07DD\x03\x02\x02\x02\u07DD\u07DF\x07"+
		"\x04\x02\x02\u07DE\u07D4\x03\x02\x02\x02\u07DE\u07D8\x03\x02\x02\x02\u07DF"+
		"\u011D\x03\x02\x02\x02\u07E0\u07E4\x05\u0120\x91\x02\u07E1\u07E4\x07\xAB"+
		"\x02\x02\u07E2\u07E4\x05\u011C\x8F\x02\u07E3\u07E0\x03\x02\x02\x02\u07E3"+
		"\u07E1\x03\x02\x02\x02\u07E3\u07E2\x03\x02\x02\x02\u07E4\u07ED\x03\x02"+
		"\x02\x02\u07E5\u07E9\x05\u026C\u0137\x02\u07E6\u07EA\x05\u0120\x91\x02"+
		"\u07E7\u07EA\x07\xAB\x02\x02\u07E8\u07EA\x05\u011C\x8F\x02\u07E9\u07E6"+
		"\x03\x02\x02\x02\u07E9\u07E7\x03\x02\x02\x02\u07E9\u07E8\x03\x02\x02\x02"+
		"\u07EA\u07EC\x03\x02\x02\x02\u07EB\u07E5\x03\x02\x02\x02\u07EC\u07EF\x03"+
		"\x02\x02\x02\u07ED\u07EB\x03\x02\x02\x02\u07ED\u07EE\x03\x02\x02\x02\u07EE"+
		"\u011F\x03\x02\x02\x02\u07EF\u07ED\x03\x02\x02\x02\u07F0\u07F7\x05\u0122"+
		"\x92\x02\u07F1\u07F7\x05\u0128\x95\x02\u07F2\u07F7\x05\u0124\x93\x02\u07F3"+
		"\u07F7\x05\u012C\x97\x02\u07F4\u07F7\x05\u012A\x96\x02\u07F5\u07F7\x05"+
		"\u01C8\xE5\x02\u07F6\u07F0\x03\x02\x02\x02\u07F6\u07F1\x03\x02\x02\x02"+
		"\u07F6\u07F2\x03\x02\x02\x02\u07F6\u07F3\x03\x02\x02\x02\u07F6\u07F4\x03"+
		"\x02\x02\x02\u07F6\u07F5\x03\x02\x02\x02\u07F7\u0121\x03\x02\x02\x02\u07F8"+
		"\u07F9\x07\xAC\x02\x02\u07F9\u0123\x03\x02\x02\x02\u07FA\u07FB\x07\xA7"+
		"\x02\x02\u07FB\u0125\x03\x02\x02\x02\u07FC\u07FD\t\x03\x02\x02\u07FD\u0127"+
		"\x03\x02\x02\x02\u07FE\u07FF\x07\xA6\x02\x02\u07FF\u0129\x03\x02\x02\x02"+
		"\u0800\u0801\t\x04\x02\x02\u0801\u012B\x03\x02\x02\x02\u0802\u0803\x07"+
		"\xA9\x02\x02\u0803\u012D\x03\x02\x02\x02\u0804\u0809\x07\xAB\x02\x02\u0805"+
		"\u0806\x07\f\x02\x02\u0806\u0807\x07\xAB\x02\x02\u0807\u0809\x07\f\x02"+
		"\x02\u0808\u0804\x03\x02\x02\x02\u0808\u0805\x03\x02\x02\x02\u0809\u012F"+
		"\x03\x02\x02\x02\u080A\u080F\x07\xAB\x02\x02\u080B\u080C\x07\f\x02\x02"+
		"\u080C\u080D\x07\xAB\x02\x02\u080D\u080F\x07\f\x02\x02\u080E\u080A\x03"+
		"\x02\x02\x02\u080E\u080B\x03\x02\x02\x02\u080F\u0131\x03\x02\x02\x02\u0810"+
		"\u0815\x07\xAB\x02\x02\u0811\u0812\x07\f\x02\x02\u0812\u0813\x07\xAB\x02"+
		"\x02\u0813\u0815\x07\f\x02\x02\u0814\u0810\x03\x02\x02\x02\u0814\u0811"+
		"\x03\x02\x02\x02\u0815\u0133\x03\x02\x02\x02\u0816\u0831\x05\u0218\u010D"+
		"\x02\u0817\u0831\x05\u021A\u010E\x02\u0818\u0831\x05\u021C\u010F\x02\u0819"+
		"\u0831\x05\u021E\u0110\x02\u081A\u0831\x05\u0220\u0111\x02\u081B\u0831"+
		"\x05\u0222\u0112\x02\u081C\u0831\x05\u0224\u0113\x02\u081D\u0831\x05\u0226"+
		"\u0114\x02\u081E\u0831\x05\u0228\u0115\x02\u081F\u0831\x05\u022A\u0116"+
		"\x02\u0820\u0831\x05\u022C\u0117\x02\u0821\u0831\x05\u022E\u0118\x02\u0822"+
		"\u0831\x05\u0230\u0119\x02\u0823\u0831\x05\u0232\u011A\x02\u0824\u0831"+
		"\x05\u0236\u011C\x02\u0825\u0831\x05\u0234\u011B\x02\u0826\u0831\x05\u0238"+
		"\u011D\x02\u0827\u0831\x05\u023A\u011E\x02\u0828\u0831\x05\u023C\u011F"+
		"\x02\u0829\u0831\x05\u023E\u0120\x02\u082A\u0831\x05\u0240\u0121\x02\u082B"+
		"\u0831\x05\u0242\u0122\x02\u082C\u0831\x05\u0244\u0123\x02\u082D\u0831"+
		"\x05\u0246\u0124\x02\u082E\u0831\x05\u0248\u0125\x02\u082F\u0831\x05\u024A"+
		"\u0126\x02\u0830\u0816\x03\x02\x02\x02\u0830\u0817\x03\x02\x02\x02\u0830"+
		"\u0818\x03\x02\x02\x02\u0830\u0819\x03\x02\x02\x02\u0830\u081A\x03\x02"+
		"\x02\x02\u0830\u081B\x03\x02\x02\x02\u0830\u081C\x03\x02\x02\x02\u0830"+
		"\u081D\x03\x02\x02\x02\u0830\u081E\x03\x02\x02\x02\u0830\u081F\x03\x02"+
		"\x02\x02\u0830\u0820\x03\x02\x02\x02\u0830\u0821\x03\x02\x02\x02\u0830"+
		"\u0822\x03\x02\x02\x02\u0830\u0823\x03\x02\x02\x02\u0830\u0824\x03\x02"+
		"\x02\x02\u0830\u0825\x03\x02\x02\x02\u0830\u0826\x03\x02\x02\x02\u0830"+
		"\u0827\x03\x02\x02\x02\u0830\u0828\x03\x02\x02\x02\u0830\u0829\x03\x02"+
		"\x02\x02\u0830\u082A\x03\x02\x02\x02\u0830\u082B\x03\x02\x02\x02\u0830"+
		"\u082C\x03\x02\x02\x02\u0830\u082D\x03\x02\x02\x02\u0830\u082E\x03\x02"+
		"\x02\x02\u0830\u082F\x03\x02\x02\x02\u0831\u0135\x03\x02\x02\x02\u0832"+
		"\u0835\x05\u0166\xB4\x02\u0833\u0835\x05\u017E\xC0\x02\u0834\u0832\x03"+
		"\x02\x02\x02\u0834\u0833\x03\x02\x02\x02\u0835\u0137\x03\x02\x02\x02\u0836"+
		"\u0837\x07\xAB\x02\x02\u0837\u0139\x03\x02\x02\x02\u0838\u0839\x07\xAB"+
		"\x02\x02\u0839\u013B\x03\x02\x02\x02\u083A\u083B\x05\u0128\x95\x02\u083B"+
		"\u013D\x03\x02\x02\x02\u083C\u083D\x07\xAB\x02\x02\u083D\u013F\x03\x02"+
		"\x02\x02\u083E\u083F\x07\xAB\x02\x02\u083F\u0141\x03\x02\x02\x02\u0840"+
		"\u0841\x07\xAB\x02\x02\u0841\u0143\x03\x02\x02\x02\u0842\u0843\x07\xAB"+
		"\x02\x02\u0843\u0145\x03\x02\x02\x02\u0844\u0845\x07\xAB\x02\x02\u0845"+
		"\u0147\x03\x02\x02\x02\u0846\u0847\x07\xAB\x02\x02\u0847\u0149\x03\x02"+
		"\x02\x02\u0848\u0849\x05\u0128\x95\x02\u0849\u014B\x03\x02\x02\x02\u084A"+
		"\u084B\x07\xAB\x02\x02\u084B\u014D\x03\x02\x02\x02\u084C\u084D\x05\u0150"+
		"\xA9\x02\u084D\u084E\x05\u0134\x9B\x02\u084E\u014F\x03\x02\x02\x02\u084F"+
		"\u0850\x07\xAB\x02\x02\u0850\u0151\x03\x02\x02\x02\u0851\u0852\x07\x19"+
		"\x02\x02\u0852\u0153\x03\x02\x02\x02\u0853\u0854\x07\x1A\x02\x02\u0854"+
		"\u0155\x03\x02\x02\x02\u0855\u0856\x07\x1B\x02\x02\u0856\u0157\x03\x02"+
		"\x02\x02\u0857\u0858\x07\x1B\x02\x02\u0858\u0859\x07f\x02\x02\u0859\u0159"+
		"\x03\x02\x02\x02\u085A\u085B\x07\x1C\x02\x02\u085B\u015B\x03\x02\x02\x02"+
		"\u085C\u085D\x07\x1C\x02\x02\u085D\u085E\x07:\x02\x02\u085E\u015D\x03"+
		"\x02\x02\x02\u085F\u0860\x07\x1D\x02\x02\u0860\u015F\x03\x02\x02\x02\u0861"+
		"\u0862\x07\x1E\x02\x02\u0862\u0161\x03\x02\x02\x02\u0863\u0864\x07 \x02"+
		"\x02\u0864\u0163\x03\x02\x02\x02\u0865\u0866\x07!\x02\x02\u0866\u0165"+
		"\x03\x02\x02\x02\u0867\u0868\x07\"\x02\x02\u0868\u0167\x03\x02\x02\x02"+
		"\u0869\u086A\x07#\x02\x02\u086A\u0169\x03\x02\x02\x02\u086B\u086C\x07"+
		"$\x02\x02\u086C\u016B\x03\x02\x02\x02\u086D\u086E\x07%\x02\x02\u086E\u016D"+
		"\x03\x02\x02\x02\u086F\u0870\x07&\x02\x02\u0870\u016F\x03\x02\x02\x02"+
		"\u0871\u0872\x07\'\x02\x02\u0872\u0171\x03\x02\x02\x02\u0873\u0874\x07"+
		"(\x02\x02\u0874\u0173\x03\x02\x02\x02\u0875\u0876\x07*\x02\x02\u0876\u0175"+
		"\x03\x02\x02\x02\u0877\u0878\x07,\x02\x02\u0878\u0177\x03\x02\x02\x02"+
		"\u0879\u087A\x07,\x02\x02\u087A\u087B\x07J\x02\x02\u087B\u0179\x03\x02"+
		"\x02\x02\u087C\u087D\x07-\x02\x02\u087D\u017B\x03\x02\x02\x02\u087E\u087F"+
		"\x07/\x02\x02\u087F\u017D\x03\x02\x02\x02\u0880\u0881\x070\x02\x02\u0881"+
		"\u017F\x03\x02\x02\x02\u0882\u0883\x071\x02\x02\u0883\u0181\x03\x02\x02"+
		"\x02\u0884\u0885\x072\x02\x02\u0885\u0183\x03\x02\x02\x02\u0886\u0887"+
		"\x073\x02\x02\u0887\u0185\x03\x02\x02\x02\u0888\u0889\x074\x02\x02\u0889"+
		"\u0187\x03\x02\x02\x02\u088A\u088B\x076\x02\x02\u088B\u0189\x03\x02\x02"+
		"\x02\u088C\u088D\x077\x02\x02\u088D\u018B\x03\x02\x02\x02\u088E\u088F"+
		"\x078\x02\x02\u088F\u018D\x03\x02\x02\x02\u0890\u0891\x07:\x02\x02\u0891"+
		"\u018F\x03\x02\x02\x02\u0892\u0893\x07;\x02\x02\u0893\u0191\x03\x02\x02"+
		"\x02\u0894\u0895\x07<\x02\x02\u0895\u0193\x03\x02\x02\x02\u0896\u0897"+
		"\x07=\x02\x02\u0897\u0195\x03\x02\x02\x02\u0898\u0899\x07>\x02\x02\u0899"+
		"\u0197\x03\x02\x02\x02\u089A\u089B\x07?\x02\x02\u089B\u0199\x03\x02\x02"+
		"\x02\u089C\u089D\x07@\x02\x02\u089D\u019B\x03\x02\x02\x02\u089E\u089F"+
		"\x07A\x02\x02\u089F\u019D\x03\x02\x02\x02\u08A0\u08A1\x07B\x02\x02\u08A1"+
		"\u019F\x03\x02\x02\x02\u08A2\u08A3\x07C\x02\x02\u08A3\u01A1\x03\x02\x02"+
		"\x02\u08A4\u08A5\x07E\x02\x02\u08A5\u01A3\x03\x02\x02\x02\u08A6\u08A7"+
		"\x07F\x02\x02\u08A7\u01A5\x03\x02\x02\x02\u08A8\u08A9\x07G\x02\x02\u08A9"+
		"\u01A7\x03\x02\x02\x02\u08AA\u08AB\x07H\x02\x02\u08AB\u01A9\x03\x02\x02"+
		"\x02\u08AC\u08AD\x07I\x02\x02\u08AD\u01AB\x03\x02\x02\x02\u08AE\u08AF"+
		"\x07J\x02\x02\u08AF\u01AD\x03\x02\x02\x02\u08B0\u08B1\x07K\x02\x02\u08B1"+
		"\u01AF\x03\x02\x02\x02\u08B2\u08B3\x07L\x02\x02\u08B3\u01B1\x03\x02\x02"+
		"\x02\u08B4\u08B5\x07M\x02\x02\u08B5\u01B3\x03\x02\x02\x02\u08B6\u08B7"+
		"\x07N\x02\x02\u08B7\u01B5\x03\x02\x02\x02\u08B8\u08B9\x07P\x02\x02\u08B9"+
		"\u01B7\x03\x02\x02\x02\u08BA\u08BB\x07\x9A\x02\x02\u08BB\u01B9\x03\x02"+
		"\x02\x02\u08BC\u08BD\x07S\x02\x02\u08BD\u01BB\x03\x02\x02\x02\u08BE\u08BF"+
		"\x07T\x02\x02\u08BF\u01BD\x03\x02\x02\x02\u08C0\u08C1\x07U\x02\x02\u08C1"+
		"\u01BF\x03\x02\x02\x02\u08C2\u08C3\x07V\x02\x02\u08C3\u01C1\x03\x02\x02"+
		"\x02\u08C4\u08C5\x07Y\x02\x02\u08C5\u01C3\x03\x02\x02\x02\u08C6\u08C7"+
		"\x07X\x02\x02\u08C7\u01C5\x03\x02\x02\x02\u08C8\u08C9\x07Z\x02\x02\u08C9"+
		"\u01C7\x03\x02\x02\x02\u08CA\u08CB\x07[\x02\x02\u08CB\u01C9\x03\x02\x02"+
		"\x02\u08CC\u08CD\x07\\\x02\x02\u08CD\u01CB\x03\x02\x02\x02\u08CE\u08CF"+
		"\x07]\x02\x02\u08CF\u01CD\x03\x02\x02\x02\u08D0\u08D1\x07_\x02\x02\u08D1"+
		"\u01CF\x03\x02\x02\x02\u08D2\u08D3\x07`\x02\x02\u08D3\u01D1\x03\x02\x02"+
		"\x02\u08D4\u08D5\x07a\x02\x02\u08D5\u01D3\x03\x02\x02\x02\u08D6\u08D7"+
		"\x07a\x02\x02\u08D7\u08D8\x07&\x02\x02\u08D8\u01D5\x03\x02\x02\x02\u08D9"+
		"\u08DA\x07c\x02\x02\u08DA\u01D7\x03\x02\x02\x02\u08DB\u08DC\x07g\x02\x02"+
		"\u08DC\u01D9\x03\x02\x02\x02\u08DD\u08DE\x07i\x02\x02\u08DE\u01DB\x03"+
		"\x02\x02\x02\u08DF\u08E0\x07j\x02\x02\u08E0\u01DD\x03\x02\x02\x02\u08E1"+
		"\u08E2\x07k\x02\x02\u08E2\u01DF\x03\x02\x02\x02\u08E3\u08E4\x07l\x02\x02"+
		"\u08E4\u01E1\x03\x02\x02\x02\u08E5\u08E6\x07n\x02\x02\u08E6\u01E3\x03"+
		"\x02\x02\x02\u08E7\u08E8\x07o\x02\x02\u08E8\u01E5\x03\x02\x02\x02\u08E9"+
		"\u08EA\x07q\x02\x02\u08EA\u01E7\x03\x02\x02\x02\u08EB\u08EC\x07r\x02\x02"+
		"\u08EC\u01E9\x03\x02\x02\x02\u08ED\u08EE\x07s\x02\x02\u08EE\u01EB\x03"+
		"\x02\x02\x02\u08EF\u08F0\x07t\x02\x02\u08F0\u01ED\x03\x02\x02\x02\u08F1"+
		"\u08F2\x07u\x02\x02\u08F2\u01EF\x03\x02\x02\x02\u08F3\u08F4\x07v\x02\x02"+
		"\u08F4\u01F1\x03\x02\x02\x02\u08F5\u08F6\x07w\x02\x02\u08F6\u01F3\x03"+
		"\x02\x02\x02\u08F7\u08F8\x07x\x02\x02\u08F8\u01F5\x03\x02\x02\x02\u08F9"+
		"\u08FA\x07z\x02\x02\u08FA\u01F7\x03\x02\x02\x02\u08FB\u08FC\x07{\x02\x02"+
		"\u08FC\u01F9\x03\x02\x02\x02\u08FD\u08FE\x07}\x02\x02\u08FE\u01FB\x03"+
		"\x02\x02\x02\u08FF\u0900\x07\x7F\x02\x02\u0900\u01FD\x03\x02\x02\x02\u0901"+
		"\u0902\x07\x80\x02\x02\u0902\u01FF\x03\x02\x02\x02\u0903\u0904\x07\x82"+
		"\x02\x02\u0904\u0201\x03\x02\x02\x02\u0905\u0906\x07\x83\x02\x02\u0906"+
		"\u0203\x03\x02\x02\x02\u0907\u0908\x07\x84\x02\x02\u0908\u0205\x03\x02"+
		"\x02\x02\u0909\u090A\x07\x85\x02\x02\u090A\u0207\x03\x02\x02\x02\u090B"+
		"\u090C\x07\x86\x02\x02\u090C\u0209\x03\x02\x02\x02\u090D\u090E\x07\xA4"+
		"\x02\x02\u090E\u020B\x03\x02\x02\x02\u090F\u0910\x07\x87\x02\x02\u0910"+
		"\u020D\x03\x02\x02\x02\u0911\u0912\x07\x89\x02\x02\u0912\u020F\x03\x02"+
		"\x02\x02\u0913\u0914\x07\x8A\x02\x02\u0914\u0211\x03\x02\x02\x02\u0915"+
		"\u0916\x07\x8B\x02\x02\u0916\u0213\x03\x02\x02\x02\u0917\u0918\x07\x8C"+
		"\x02\x02\u0918\u0215\x03\x02\x02\x02\u0919\u091A\x07m\x02\x02\u091A\u0217"+
		"\x03\x02\x02\x02\u091B\u091C\x07\x8E\x02\x02\u091C\u0219\x03\x02\x02\x02"+
		"\u091D\u091E\x07\x8F\x02\x02\u091E\u021B\x03\x02\x02\x02\u091F\u0920\x07"+
		"\x90\x02\x02\u0920\u021D\x03\x02\x02\x02\u0921\u0922\x07\x91\x02\x02\u0922"+
		"\u021F\x03\x02\x02\x02\u0923\u0924\x07\x92\x02\x02\u0924\u0221\x03\x02"+
		"\x02\x02\u0925\u0926\x07\x93\x02\x02\u0926\u0223\x03\x02\x02\x02\u0927"+
		"\u0928\x07\x94\x02\x02\u0928\u0225\x03\x02\x02\x02\u0929\u092A\x07\x95"+
		"\x02\x02\u092A\u0227\x03\x02\x02\x02\u092B\u092C\x07\x96\x02\x02\u092C"+
		"\u0229\x03\x02\x02\x02\u092D\u092E\x07\x97\x02\x02\u092E\u092F\x05\u0254"+
		"\u012B\x02\u092F\u022B\x03\x02\x02\x02\u0930\u0931\x07\x98\x02\x02\u0931"+
		"\u022D\x03\x02\x02\x02\u0932\u0933\x07\x99\x02\x02\u0933\u022F\x03\x02"+
		"\x02\x02\u0934\u0935\x07\x9A\x02\x02\u0935\u0936\x05\u0250\u0129\x02\u0936"+
		"\u0231\x03\x02\x02\x02\u0937\u0938\x07\x9B\x02\x02\u0938\u0939\x05\u024E"+
		"\u0128\x02\u0939\u0233\x03\x02\x02\x02\u093A\u093B\x07\x9C\x02\x02\u093B"+
		"\u0235\x03\x02\x02\x02\u093C\u093D\x07r\x02\x02\u093D\u093E\x05\u0252"+
		"\u012A\x02\u093E\u0237\x03\x02\x02\x02\u093F\u0940\x07\x9D\x02\x02\u0940"+
		"\u0239\x03\x02\x02\x02\u0941\u0942\x07\x9F\x02\x02\u0942\u023B\x03\x02"+
		"\x02\x02\u0943\u0944\x07\x9E\x02\x02\u0944\u023D\x03\x02\x02\x02\u0945"+
		"\u0946\x07z\x02\x02\u0946\u023F\x03\x02\x02\x02\u0947\u0948\x07\xA0\x02"+
		"\x02\u0948\u0241\x03\x02\x02\x02\u0949\u094A\x07\xA1\x02\x02\u094A\u094B"+
		"\x05\u024C\u0127\x02\u094B\u0243\x03\x02\x02\x02\u094C\u094D\x07\xAB\x02"+
		"\x02\u094D\u0245\x03\x02\x02\x02\u094E\u094F\x07\x88\x02\x02\u094F\u0247"+
		"\x03\x02\x02\x02\u0950\u0951\x07\xA2\x02\x02\u0951\u0249\x03\x02\x02\x02"+
		"\u0952\u0953\x07\xA3\x02\x02\u0953\u024B\x03\x02\x02\x02\u0954\u0955\x05"+
		"\u0264\u0133\x02\u0955\u095B\x05\u0134\x9B\x02\u0956\u0957\x05\u026C\u0137"+
		"\x02\u0957\u0958\x05\u0134\x9B\x02\u0958\u095A\x03\x02\x02\x02\u0959\u0956"+
		"\x03\x02\x02\x02\u095A\u095D\x03\x02\x02\x02\u095B\u0959\x03";
	private static readonly _serializedATNSegment4: string =
		"\x02\x02\x02\u095B\u095C\x03\x02\x02\x02\u095C\u095E\x03\x02\x02\x02\u095D"+
		"\u095B\x03\x02\x02\x02\u095E\u095F\x05\u0266\u0134\x02\u095F\u024D\x03"+
		"\x02\x02\x02\u0960\u0961\x05\u0264\u0133\x02\u0961\u0962\x05\u0134\x9B"+
		"\x02\u0962\u0963\x05\u026C\u0137\x02\u0963\u0964\x05\u0134\x9B\x02\u0964"+
		"\u0965\x05\u0266\u0134\x02\u0965\u024F\x03\x02\x02\x02\u0966\u0967\x05"+
		"\u0264\u0133\x02\u0967\u0968\x05\u0134\x9B\x02\u0968\u0969\x05\u0266\u0134"+
		"\x02\u0969\u0251\x03\x02\x02\x02\u096A\u096B\x05\u0264\u0133\x02\u096B"+
		"\u096C\x05\u0134\x9B\x02\u096C\u096D\x05\u0266\u0134\x02\u096D\u0253\x03"+
		"\x02\x02\x02\u096E\u096F\x05\u0264\u0133\x02\u096F\u0970\x05\u0134\x9B"+
		"\x02\u0970\u0971\x05\u0266\u0134\x02\u0971\u0255\x03\x02\x02\x02\u0972"+
		"\u0973\x07\x13\x02\x02\u0973\u0257\x03\x02\x02\x02\u0974\u0975\x07\x12"+
		"\x02\x02\u0975\u0259\x03\x02\x02\x02\u0976\u0977\x07\x02\x02\x03\u0977"+
		"\u025B\x03\x02\x02\x02\u0978\u0979\x07\x03\x02\x02\u0979\u025D\x03\x02"+
		"\x02\x02\u097A\u097B\x07\x04\x02\x02\u097B\u025F\x03\x02\x02\x02\u097C"+
		"\u097D\x07\x05\x02\x02\u097D\u0261\x03\x02\x02\x02\u097E\u097F\x07\x06"+
		"\x02\x02\u097F\u0263\x03\x02\x02\x02\u0980\u0981\x07\xAE\x02\x02\u0981"+
		"\u0265\x03\x02\x02\x02\u0982\u0983\x07\xAF\x02\x02\u0983\u0267\x03\x02"+
		"\x02\x02\u0984\u0985\x07\x07\x02\x02\u0985\u0269\x03\x02\x02\x02\u0986"+
		"\u0987\x07\b\x02\x02\u0987\u026B\x03\x02\x02\x02\u0988\u0989\x07\t\x02"+
		"\x02\u0989\u026D\x03\x02\x02\x02\u098A\u098B\x07\v\x02\x02\u098B\u026F"+
		"\x03\x02\x02\x02\u098C\u098D\x07\r\x02\x02\u098D\u0271\x03\x02\x02\x02"+
		"\u098E\u098F\x07\f\x02\x02\u098F\u0273\x03\x02\x02\x02\u0990\u0991\x07"+
		"\xAD\x02\x02\u0991\u0275\x03\x02\x02\x02\u0992\u0993\x07\xAE\x02\x02\u0993"+
		"\u0277\x03\x02\x02\x02\u0994\u0995\x07\xAF\x02\x02\u0995\u0279\x03\x02"+
		"\x02\x02\u0996\u0997\x07\xB0\x02\x02\u0997\u027B\x03\x02\x02\x02\u0998"+
		"\u0999\x07\xB1\x02\x02\u0999\u027D\x03\x02\x02\x02\xAC\u027F\u0282\u0288"+
		"\u028D\u028F\u0294\u0297\u029A\u02C5\u02D6\u02D9\u02E0\u02E5\u02F0\u02FA"+
		"\u0309\u0314\u0319\u0322\u0327\u032F\u0334\u0338\u033D\u0342\u0351\u0357"+
		"\u035C\u0366\u036B\u0375\u0381\u0388\u0390\u039E\u03A3\u03AF\u03B3\u03B7"+
		"\u03BC\u03C1\u03D4\u03DB\u03E3\u03E7\u03EC\u03FF\u0408\u0417\u0419\u0425"+
		"\u0433\u043A\u0441\u0449\u0454\u0464\u0471\u047C\u0493\u04A1\u04A8\u04B1"+
		"\u04C4\u04CC\u04D2\u04D7\u04DE\u04E3\u04EB\u04F0\u04F7\u04FC\u0503\u0508"+
		"\u050F\u0516\u051D\u0524\u0529\u0530\u0537\u053C\u0543\u0548\u054F\u0553"+
		"\u0556\u055E\u0568\u0573\u0579\u0582\u058F\u0597\u059D\u05AA\u05B8\u05CC"+
		"\u05D5\u05E1\u05E5\u05E9\u05F7\u05FF\u0608\u0613\u0618\u061F\u0622\u0628"+
		"\u0631\u0637\u0649\u064D\u0651\u0656\u065E\u0666\u066A\u066D\u0673\u0677"+
		"\u067E\u0689\u0696\u069F\u06CE\u06D7\u06E7\u06F3\u06FA\u0702\u0709\u070C"+
		"\u071E\u073F\u0746\u074D\u0751\u0756\u075B\u075E\u0761\u0764\u0771\u0779"+
		"\u0785\u0788\u078F\u0795\u0797\u079F\u07A8\u07B2\u07BC\u07C4\u07CA\u07DB"+
		"\u07DE\u07E3\u07E9\u07ED\u07F6\u0808\u080E\u0814\u0830\u0834\u095B";
	public static readonly _serializedATN: string = Utils.join(
		[
			CqlParser._serializedATNSegment0,
			CqlParser._serializedATNSegment1,
			CqlParser._serializedATNSegment2,
			CqlParser._serializedATNSegment3,
			CqlParser._serializedATNSegment4
		],
		""
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CqlParser.__ATN) {
			CqlParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CqlParser._serializedATN));
		}

		return CqlParser.__ATN;
	}

}

export class RootContext extends ParserRuleContext {
	public eof(): EofContext {
		return this.getRuleContext(0, EofContext);
	}
	public cqls(): CqlsContext | undefined {
		return this.tryGetRuleContext(0, CqlsContext);
	}
	public MINUSMINUS(): TerminalNode | undefined { return this.tryGetToken(CqlParser.MINUSMINUS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_root; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterRoot) listener.enterRoot(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitRoot) listener.exitRoot(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitRoot) return visitor.visitRoot(this);
		else return visitor.visitChildren(this);
	}
}


export class CqlsContext extends ParserRuleContext {
	public cql(): CqlContext[];
	public cql(i: number): CqlContext;
	public cql(i?: number): CqlContext | CqlContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CqlContext);
		} else {
			return this.getRuleContext(i, CqlContext);
		}
	}
	public empty(): EmptyContext[];
	public empty(i: number): EmptyContext;
	public empty(i?: number): EmptyContext | EmptyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EmptyContext);
		} else {
			return this.getRuleContext(i, EmptyContext);
		}
	}
	public statementSeparator(): StatementSeparatorContext[];
	public statementSeparator(i: number): StatementSeparatorContext;
	public statementSeparator(i?: number): StatementSeparatorContext | StatementSeparatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementSeparatorContext);
		} else {
			return this.getRuleContext(i, StatementSeparatorContext);
		}
	}
	public MINUSMINUS(): TerminalNode[];
	public MINUSMINUS(i: number): TerminalNode;
	public MINUSMINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CqlParser.MINUSMINUS);
		} else {
			return this.getToken(CqlParser.MINUSMINUS, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_cqls; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterCqls) listener.enterCqls(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitCqls) listener.exitCqls(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitCqls) return visitor.visitCqls(this);
		else return visitor.visitChildren(this);
	}
}


export class StatementSeparatorContext extends ParserRuleContext {
	public SEMI(): TerminalNode { return this.getToken(CqlParser.SEMI, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_statementSeparator; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterStatementSeparator) listener.enterStatementSeparator(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitStatementSeparator) listener.exitStatementSeparator(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitStatementSeparator) return visitor.visitStatementSeparator(this);
		else return visitor.visitChildren(this);
	}
}


export class EmptyContext extends ParserRuleContext {
	public statementSeparator(): StatementSeparatorContext {
		return this.getRuleContext(0, StatementSeparatorContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_empty; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterEmpty) listener.enterEmpty(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitEmpty) listener.exitEmpty(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitEmpty) return visitor.visitEmpty(this);
		else return visitor.visitChildren(this);
	}
}


export class CqlContext extends ParserRuleContext {
	public alterKeyspace(): AlterKeyspaceContext | undefined {
		return this.tryGetRuleContext(0, AlterKeyspaceContext);
	}
	public alterMaterializedView(): AlterMaterializedViewContext | undefined {
		return this.tryGetRuleContext(0, AlterMaterializedViewContext);
	}
	public alterRole(): AlterRoleContext | undefined {
		return this.tryGetRuleContext(0, AlterRoleContext);
	}
	public alterTable(): AlterTableContext | undefined {
		return this.tryGetRuleContext(0, AlterTableContext);
	}
	public alterType(): AlterTypeContext | undefined {
		return this.tryGetRuleContext(0, AlterTypeContext);
	}
	public alterUser(): AlterUserContext | undefined {
		return this.tryGetRuleContext(0, AlterUserContext);
	}
	public applyBatch(): ApplyBatchContext | undefined {
		return this.tryGetRuleContext(0, ApplyBatchContext);
	}
	public createAggregate(): CreateAggregateContext | undefined {
		return this.tryGetRuleContext(0, CreateAggregateContext);
	}
	public createFunction(): CreateFunctionContext | undefined {
		return this.tryGetRuleContext(0, CreateFunctionContext);
	}
	public createIndex(): CreateIndexContext | undefined {
		return this.tryGetRuleContext(0, CreateIndexContext);
	}
	public createKeyspace(): CreateKeyspaceContext | undefined {
		return this.tryGetRuleContext(0, CreateKeyspaceContext);
	}
	public createMaterializedView(): CreateMaterializedViewContext | undefined {
		return this.tryGetRuleContext(0, CreateMaterializedViewContext);
	}
	public createRole(): CreateRoleContext | undefined {
		return this.tryGetRuleContext(0, CreateRoleContext);
	}
	public createTable(): CreateTableContext | undefined {
		return this.tryGetRuleContext(0, CreateTableContext);
	}
	public createTrigger(): CreateTriggerContext | undefined {
		return this.tryGetRuleContext(0, CreateTriggerContext);
	}
	public createType(): CreateTypeContext | undefined {
		return this.tryGetRuleContext(0, CreateTypeContext);
	}
	public createUser(): CreateUserContext | undefined {
		return this.tryGetRuleContext(0, CreateUserContext);
	}
	public delete(): DeleteContext | undefined {
		return this.tryGetRuleContext(0, DeleteContext);
	}
	public dropAggregate(): DropAggregateContext | undefined {
		return this.tryGetRuleContext(0, DropAggregateContext);
	}
	public dropFunction(): DropFunctionContext | undefined {
		return this.tryGetRuleContext(0, DropFunctionContext);
	}
	public dropIndex(): DropIndexContext | undefined {
		return this.tryGetRuleContext(0, DropIndexContext);
	}
	public dropKeyspace(): DropKeyspaceContext | undefined {
		return this.tryGetRuleContext(0, DropKeyspaceContext);
	}
	public dropMaterializedView(): DropMaterializedViewContext | undefined {
		return this.tryGetRuleContext(0, DropMaterializedViewContext);
	}
	public dropRole(): DropRoleContext | undefined {
		return this.tryGetRuleContext(0, DropRoleContext);
	}
	public dropTable(): DropTableContext | undefined {
		return this.tryGetRuleContext(0, DropTableContext);
	}
	public dropTrigger(): DropTriggerContext | undefined {
		return this.tryGetRuleContext(0, DropTriggerContext);
	}
	public dropType(): DropTypeContext | undefined {
		return this.tryGetRuleContext(0, DropTypeContext);
	}
	public dropUser(): DropUserContext | undefined {
		return this.tryGetRuleContext(0, DropUserContext);
	}
	public grant(): GrantContext | undefined {
		return this.tryGetRuleContext(0, GrantContext);
	}
	public insert(): InsertContext | undefined {
		return this.tryGetRuleContext(0, InsertContext);
	}
	public listPermissions(): ListPermissionsContext | undefined {
		return this.tryGetRuleContext(0, ListPermissionsContext);
	}
	public listRoles(): ListRolesContext | undefined {
		return this.tryGetRuleContext(0, ListRolesContext);
	}
	public revoke(): RevokeContext | undefined {
		return this.tryGetRuleContext(0, RevokeContext);
	}
	public select(): SelectContext | undefined {
		return this.tryGetRuleContext(0, SelectContext);
	}
	public truncate(): TruncateContext | undefined {
		return this.tryGetRuleContext(0, TruncateContext);
	}
	public update(): UpdateContext | undefined {
		return this.tryGetRuleContext(0, UpdateContext);
	}
	public use(): UseContext | undefined {
		return this.tryGetRuleContext(0, UseContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_cql; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterCql) listener.enterCql(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitCql) listener.exitCql(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitCql) return visitor.visitCql(this);
		else return visitor.visitChildren(this);
	}
}


export class RevokeContext extends ParserRuleContext {
	public kwRevoke(): KwRevokeContext {
		return this.getRuleContext(0, KwRevokeContext);
	}
	public priviledge(): PriviledgeContext {
		return this.getRuleContext(0, PriviledgeContext);
	}
	public kwOn(): KwOnContext {
		return this.getRuleContext(0, KwOnContext);
	}
	public resource(): ResourceContext {
		return this.getRuleContext(0, ResourceContext);
	}
	public kwFrom(): KwFromContext {
		return this.getRuleContext(0, KwFromContext);
	}
	public role(): RoleContext {
		return this.getRuleContext(0, RoleContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_revoke; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterRevoke) listener.enterRevoke(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitRevoke) listener.exitRevoke(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitRevoke) return visitor.visitRevoke(this);
		else return visitor.visitChildren(this);
	}
}


export class ListUsersContext extends ParserRuleContext {
	public kwList(): KwListContext {
		return this.getRuleContext(0, KwListContext);
	}
	public kwUsers(): KwUsersContext {
		return this.getRuleContext(0, KwUsersContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_listUsers; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterListUsers) listener.enterListUsers(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitListUsers) listener.exitListUsers(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitListUsers) return visitor.visitListUsers(this);
		else return visitor.visitChildren(this);
	}
}


export class ListRolesContext extends ParserRuleContext {
	public kwList(): KwListContext {
		return this.getRuleContext(0, KwListContext);
	}
	public kwRoles(): KwRolesContext {
		return this.getRuleContext(0, KwRolesContext);
	}
	public kwOf(): KwOfContext | undefined {
		return this.tryGetRuleContext(0, KwOfContext);
	}
	public role(): RoleContext | undefined {
		return this.tryGetRuleContext(0, RoleContext);
	}
	public kwNorecursive(): KwNorecursiveContext | undefined {
		return this.tryGetRuleContext(0, KwNorecursiveContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_listRoles; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterListRoles) listener.enterListRoles(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitListRoles) listener.exitListRoles(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitListRoles) return visitor.visitListRoles(this);
		else return visitor.visitChildren(this);
	}
}


export class ListPermissionsContext extends ParserRuleContext {
	public kwList(): KwListContext {
		return this.getRuleContext(0, KwListContext);
	}
	public priviledge(): PriviledgeContext {
		return this.getRuleContext(0, PriviledgeContext);
	}
	public kwOn(): KwOnContext | undefined {
		return this.tryGetRuleContext(0, KwOnContext);
	}
	public resource(): ResourceContext | undefined {
		return this.tryGetRuleContext(0, ResourceContext);
	}
	public kwOf(): KwOfContext | undefined {
		return this.tryGetRuleContext(0, KwOfContext);
	}
	public role(): RoleContext | undefined {
		return this.tryGetRuleContext(0, RoleContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_listPermissions; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterListPermissions) listener.enterListPermissions(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitListPermissions) listener.exitListPermissions(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitListPermissions) return visitor.visitListPermissions(this);
		else return visitor.visitChildren(this);
	}
}


export class GrantContext extends ParserRuleContext {
	public kwGrant(): KwGrantContext {
		return this.getRuleContext(0, KwGrantContext);
	}
	public priviledge(): PriviledgeContext {
		return this.getRuleContext(0, PriviledgeContext);
	}
	public kwOn(): KwOnContext {
		return this.getRuleContext(0, KwOnContext);
	}
	public resource(): ResourceContext {
		return this.getRuleContext(0, ResourceContext);
	}
	public kwTo(): KwToContext {
		return this.getRuleContext(0, KwToContext);
	}
	public role(): RoleContext {
		return this.getRuleContext(0, RoleContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_grant; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterGrant) listener.enterGrant(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitGrant) listener.exitGrant(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitGrant) return visitor.visitGrant(this);
		else return visitor.visitChildren(this);
	}
}


export class PriviledgeContext extends ParserRuleContext {
	public kwAll(): KwAllContext | undefined {
		return this.tryGetRuleContext(0, KwAllContext);
	}
	public kwAllPermissions(): KwAllPermissionsContext | undefined {
		return this.tryGetRuleContext(0, KwAllPermissionsContext);
	}
	public kwAlter(): KwAlterContext | undefined {
		return this.tryGetRuleContext(0, KwAlterContext);
	}
	public kwAuthorize(): KwAuthorizeContext | undefined {
		return this.tryGetRuleContext(0, KwAuthorizeContext);
	}
	public kwDescibe(): KwDescibeContext | undefined {
		return this.tryGetRuleContext(0, KwDescibeContext);
	}
	public kwExecute(): KwExecuteContext | undefined {
		return this.tryGetRuleContext(0, KwExecuteContext);
	}
	public kwCreate(): KwCreateContext | undefined {
		return this.tryGetRuleContext(0, KwCreateContext);
	}
	public kwDrop(): KwDropContext | undefined {
		return this.tryGetRuleContext(0, KwDropContext);
	}
	public kwModify(): KwModifyContext | undefined {
		return this.tryGetRuleContext(0, KwModifyContext);
	}
	public kwSelect(): KwSelectContext | undefined {
		return this.tryGetRuleContext(0, KwSelectContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_priviledge; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterPriviledge) listener.enterPriviledge(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitPriviledge) listener.exitPriviledge(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitPriviledge) return visitor.visitPriviledge(this);
		else return visitor.visitChildren(this);
	}
}


export class ResourceContext extends ParserRuleContext {
	public kwAll(): KwAllContext | undefined {
		return this.tryGetRuleContext(0, KwAllContext);
	}
	public kwFunctions(): KwFunctionsContext | undefined {
		return this.tryGetRuleContext(0, KwFunctionsContext);
	}
	public kwIn(): KwInContext | undefined {
		return this.tryGetRuleContext(0, KwInContext);
	}
	public kwKeyspace(): KwKeyspaceContext | undefined {
		return this.tryGetRuleContext(0, KwKeyspaceContext);
	}
	public keyspace(): KeyspaceContext | undefined {
		return this.tryGetRuleContext(0, KeyspaceContext);
	}
	public kwFunction(): KwFunctionContext | undefined {
		return this.tryGetRuleContext(0, KwFunctionContext);
	}
	public function(): FunctionContext | undefined {
		return this.tryGetRuleContext(0, FunctionContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CqlParser.DOT, 0); }
	public kwKeyspaces(): KwKeyspacesContext | undefined {
		return this.tryGetRuleContext(0, KwKeyspacesContext);
	}
	public table(): TableContext | undefined {
		return this.tryGetRuleContext(0, TableContext);
	}
	public kwTable(): KwTableContext | undefined {
		return this.tryGetRuleContext(0, KwTableContext);
	}
	public kwRoles(): KwRolesContext | undefined {
		return this.tryGetRuleContext(0, KwRolesContext);
	}
	public kwRole(): KwRoleContext | undefined {
		return this.tryGetRuleContext(0, KwRoleContext);
	}
	public role(): RoleContext | undefined {
		return this.tryGetRuleContext(0, RoleContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_resource; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterResource) listener.enterResource(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitResource) listener.exitResource(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitResource) return visitor.visitResource(this);
		else return visitor.visitChildren(this);
	}
}


export class CreateUserContext extends ParserRuleContext {
	public kwCreate(): KwCreateContext {
		return this.getRuleContext(0, KwCreateContext);
	}
	public kwUser(): KwUserContext {
		return this.getRuleContext(0, KwUserContext);
	}
	public user(): UserContext {
		return this.getRuleContext(0, UserContext);
	}
	public kwWith(): KwWithContext {
		return this.getRuleContext(0, KwWithContext);
	}
	public kwPassword(): KwPasswordContext {
		return this.getRuleContext(0, KwPasswordContext);
	}
	public literalString(): LiteralStringContext {
		return this.getRuleContext(0, LiteralStringContext);
	}
	public ifNotExist(): IfNotExistContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistContext);
	}
	public kwSuperuser(): KwSuperuserContext | undefined {
		return this.tryGetRuleContext(0, KwSuperuserContext);
	}
	public kwNosuperuser(): KwNosuperuserContext | undefined {
		return this.tryGetRuleContext(0, KwNosuperuserContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_createUser; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterCreateUser) listener.enterCreateUser(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitCreateUser) listener.exitCreateUser(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitCreateUser) return visitor.visitCreateUser(this);
		else return visitor.visitChildren(this);
	}
}


export class CreateRoleContext extends ParserRuleContext {
	public kwCreate(): KwCreateContext {
		return this.getRuleContext(0, KwCreateContext);
	}
	public kwRole(): KwRoleContext {
		return this.getRuleContext(0, KwRoleContext);
	}
	public role(): RoleContext {
		return this.getRuleContext(0, RoleContext);
	}
	public ifNotExist(): IfNotExistContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistContext);
	}
	public roleWith(): RoleWithContext | undefined {
		return this.tryGetRuleContext(0, RoleWithContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_createRole; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterCreateRole) listener.enterCreateRole(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitCreateRole) listener.exitCreateRole(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitCreateRole) return visitor.visitCreateRole(this);
		else return visitor.visitChildren(this);
	}
}


export class CreateTypeContext extends ParserRuleContext {
	public kwCreate(): KwCreateContext {
		return this.getRuleContext(0, KwCreateContext);
	}
	public kwType(): KwTypeContext {
		return this.getRuleContext(0, KwTypeContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public syntaxBracketLr(): SyntaxBracketLrContext {
		return this.getRuleContext(0, SyntaxBracketLrContext);
	}
	public typeMemberColumnList(): TypeMemberColumnListContext {
		return this.getRuleContext(0, TypeMemberColumnListContext);
	}
	public syntaxBracketRr(): SyntaxBracketRrContext {
		return this.getRuleContext(0, SyntaxBracketRrContext);
	}
	public ifNotExist(): IfNotExistContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistContext);
	}
	public keyspace(): KeyspaceContext | undefined {
		return this.tryGetRuleContext(0, KeyspaceContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CqlParser.DOT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_createType; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterCreateType) listener.enterCreateType(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitCreateType) listener.exitCreateType(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitCreateType) return visitor.visitCreateType(this);
		else return visitor.visitChildren(this);
	}
}


export class TypeMemberColumnListContext extends ParserRuleContext {
	public column(): ColumnContext[];
	public column(i: number): ColumnContext;
	public column(i?: number): ColumnContext | ColumnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnContext);
		} else {
			return this.getRuleContext(i, ColumnContext);
		}
	}
	public dataType(): DataTypeContext[];
	public dataType(i: number): DataTypeContext;
	public dataType(i?: number): DataTypeContext | DataTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DataTypeContext);
		} else {
			return this.getRuleContext(i, DataTypeContext);
		}
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_typeMemberColumnList; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterTypeMemberColumnList) listener.enterTypeMemberColumnList(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitTypeMemberColumnList) listener.exitTypeMemberColumnList(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitTypeMemberColumnList) return visitor.visitTypeMemberColumnList(this);
		else return visitor.visitChildren(this);
	}
}


export class CreateTriggerContext extends ParserRuleContext {
	public kwCreate(): KwCreateContext {
		return this.getRuleContext(0, KwCreateContext);
	}
	public kwTrigger(): KwTriggerContext {
		return this.getRuleContext(0, KwTriggerContext);
	}
	public trigger(): TriggerContext {
		return this.getRuleContext(0, TriggerContext);
	}
	public kwUsing(): KwUsingContext {
		return this.getRuleContext(0, KwUsingContext);
	}
	public triggerClass(): TriggerClassContext {
		return this.getRuleContext(0, TriggerClassContext);
	}
	public ifNotExist(): IfNotExistContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistContext);
	}
	public keyspace(): KeyspaceContext | undefined {
		return this.tryGetRuleContext(0, KeyspaceContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CqlParser.DOT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_createTrigger; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterCreateTrigger) listener.enterCreateTrigger(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitCreateTrigger) listener.exitCreateTrigger(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitCreateTrigger) return visitor.visitCreateTrigger(this);
		else return visitor.visitChildren(this);
	}
}


export class CreateMaterializedViewContext extends ParserRuleContext {
	public kwCreate(): KwCreateContext {
		return this.getRuleContext(0, KwCreateContext);
	}
	public kwMaterialized(): KwMaterializedContext {
		return this.getRuleContext(0, KwMaterializedContext);
	}
	public kwView(): KwViewContext {
		return this.getRuleContext(0, KwViewContext);
	}
	public materializedView(): MaterializedViewContext {
		return this.getRuleContext(0, MaterializedViewContext);
	}
	public kwAs(): KwAsContext {
		return this.getRuleContext(0, KwAsContext);
	}
	public kwSelect(): KwSelectContext {
		return this.getRuleContext(0, KwSelectContext);
	}
	public columnList(): ColumnListContext[];
	public columnList(i: number): ColumnListContext;
	public columnList(i?: number): ColumnListContext | ColumnListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnListContext);
		} else {
			return this.getRuleContext(i, ColumnListContext);
		}
	}
	public kwFrom(): KwFromContext {
		return this.getRuleContext(0, KwFromContext);
	}
	public table(): TableContext {
		return this.getRuleContext(0, TableContext);
	}
	public materializedViewWhere(): MaterializedViewWhereContext {
		return this.getRuleContext(0, MaterializedViewWhereContext);
	}
	public kwPrimary(): KwPrimaryContext {
		return this.getRuleContext(0, KwPrimaryContext);
	}
	public kwKey(): KwKeyContext {
		return this.getRuleContext(0, KwKeyContext);
	}
	public syntaxBracketLr(): SyntaxBracketLrContext {
		return this.getRuleContext(0, SyntaxBracketLrContext);
	}
	public syntaxBracketRr(): SyntaxBracketRrContext {
		return this.getRuleContext(0, SyntaxBracketRrContext);
	}
	public ifNotExist(): IfNotExistContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistContext);
	}
	public keyspace(): KeyspaceContext[];
	public keyspace(i: number): KeyspaceContext;
	public keyspace(i?: number): KeyspaceContext | KeyspaceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyspaceContext);
		} else {
			return this.getRuleContext(i, KeyspaceContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CqlParser.DOT);
		} else {
			return this.getToken(CqlParser.DOT, i);
		}
	}
	public kwWith(): KwWithContext | undefined {
		return this.tryGetRuleContext(0, KwWithContext);
	}
	public materializedViewOptions(): MaterializedViewOptionsContext | undefined {
		return this.tryGetRuleContext(0, MaterializedViewOptionsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_createMaterializedView; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterCreateMaterializedView) listener.enterCreateMaterializedView(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitCreateMaterializedView) listener.exitCreateMaterializedView(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitCreateMaterializedView) return visitor.visitCreateMaterializedView(this);
		else return visitor.visitChildren(this);
	}
}


export class MaterializedViewWhereContext extends ParserRuleContext {
	public kwWhere(): KwWhereContext {
		return this.getRuleContext(0, KwWhereContext);
	}
	public columnNotNullList(): ColumnNotNullListContext {
		return this.getRuleContext(0, ColumnNotNullListContext);
	}
	public kwAnd(): KwAndContext | undefined {
		return this.tryGetRuleContext(0, KwAndContext);
	}
	public relationElements(): RelationElementsContext | undefined {
		return this.tryGetRuleContext(0, RelationElementsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_materializedViewWhere; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterMaterializedViewWhere) listener.enterMaterializedViewWhere(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitMaterializedViewWhere) listener.exitMaterializedViewWhere(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitMaterializedViewWhere) return visitor.visitMaterializedViewWhere(this);
		else return visitor.visitChildren(this);
	}
}


export class ColumnNotNullListContext extends ParserRuleContext {
	public columnNotNull(): ColumnNotNullContext[];
	public columnNotNull(i: number): ColumnNotNullContext;
	public columnNotNull(i?: number): ColumnNotNullContext | ColumnNotNullContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnNotNullContext);
		} else {
			return this.getRuleContext(i, ColumnNotNullContext);
		}
	}
	public kwAnd(): KwAndContext[];
	public kwAnd(i: number): KwAndContext;
	public kwAnd(i?: number): KwAndContext | KwAndContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KwAndContext);
		} else {
			return this.getRuleContext(i, KwAndContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_columnNotNullList; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterColumnNotNullList) listener.enterColumnNotNullList(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitColumnNotNullList) listener.exitColumnNotNullList(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitColumnNotNullList) return visitor.visitColumnNotNullList(this);
		else return visitor.visitChildren(this);
	}
}


export class ColumnNotNullContext extends ParserRuleContext {
	public column(): ColumnContext {
		return this.getRuleContext(0, ColumnContext);
	}
	public kwIs(): KwIsContext {
		return this.getRuleContext(0, KwIsContext);
	}
	public kwNot(): KwNotContext {
		return this.getRuleContext(0, KwNotContext);
	}
	public kwNull(): KwNullContext {
		return this.getRuleContext(0, KwNullContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_columnNotNull; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterColumnNotNull) listener.enterColumnNotNull(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitColumnNotNull) listener.exitColumnNotNull(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitColumnNotNull) return visitor.visitColumnNotNull(this);
		else return visitor.visitChildren(this);
	}
}


export class MaterializedViewOptionsContext extends ParserRuleContext {
	public tableOptions(): TableOptionsContext | undefined {
		return this.tryGetRuleContext(0, TableOptionsContext);
	}
	public kwAnd(): KwAndContext | undefined {
		return this.tryGetRuleContext(0, KwAndContext);
	}
	public clusteringOrder(): ClusteringOrderContext | undefined {
		return this.tryGetRuleContext(0, ClusteringOrderContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_materializedViewOptions; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterMaterializedViewOptions) listener.enterMaterializedViewOptions(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitMaterializedViewOptions) listener.exitMaterializedViewOptions(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitMaterializedViewOptions) return visitor.visitMaterializedViewOptions(this);
		else return visitor.visitChildren(this);
	}
}


export class CreateKeyspaceContext extends ParserRuleContext {
	public kwCreate(): KwCreateContext {
		return this.getRuleContext(0, KwCreateContext);
	}
	public kwKeyspace(): KwKeyspaceContext {
		return this.getRuleContext(0, KwKeyspaceContext);
	}
	public keyspace(): KeyspaceContext {
		return this.getRuleContext(0, KeyspaceContext);
	}
	public kwWith(): KwWithContext {
		return this.getRuleContext(0, KwWithContext);
	}
	public kwReplication(): KwReplicationContext {
		return this.getRuleContext(0, KwReplicationContext);
	}
	public OPERATOR_EQ(): TerminalNode { return this.getToken(CqlParser.OPERATOR_EQ, 0); }
	public syntaxBracketLc(): SyntaxBracketLcContext {
		return this.getRuleContext(0, SyntaxBracketLcContext);
	}
	public replicationList(): ReplicationListContext {
		return this.getRuleContext(0, ReplicationListContext);
	}
	public syntaxBracketRc(): SyntaxBracketRcContext {
		return this.getRuleContext(0, SyntaxBracketRcContext);
	}
	public ifNotExist(): IfNotExistContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistContext);
	}
	public kwAnd(): KwAndContext | undefined {
		return this.tryGetRuleContext(0, KwAndContext);
	}
	public durableWrites(): DurableWritesContext | undefined {
		return this.tryGetRuleContext(0, DurableWritesContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_createKeyspace; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterCreateKeyspace) listener.enterCreateKeyspace(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitCreateKeyspace) listener.exitCreateKeyspace(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitCreateKeyspace) return visitor.visitCreateKeyspace(this);
		else return visitor.visitChildren(this);
	}
}


export class CreateFunctionContext extends ParserRuleContext {
	public kwCreate(): KwCreateContext {
		return this.getRuleContext(0, KwCreateContext);
	}
	public kwFunction(): KwFunctionContext {
		return this.getRuleContext(0, KwFunctionContext);
	}
	public function(): FunctionContext {
		return this.getRuleContext(0, FunctionContext);
	}
	public syntaxBracketLr(): SyntaxBracketLrContext {
		return this.getRuleContext(0, SyntaxBracketLrContext);
	}
	public syntaxBracketRr(): SyntaxBracketRrContext {
		return this.getRuleContext(0, SyntaxBracketRrContext);
	}
	public returnMode(): ReturnModeContext {
		return this.getRuleContext(0, ReturnModeContext);
	}
	public kwReturns(): KwReturnsContext {
		return this.getRuleContext(0, KwReturnsContext);
	}
	public dataType(): DataTypeContext {
		return this.getRuleContext(0, DataTypeContext);
	}
	public kwLanguage(): KwLanguageContext {
		return this.getRuleContext(0, KwLanguageContext);
	}
	public language(): LanguageContext {
		return this.getRuleContext(0, LanguageContext);
	}
	public kwAs(): KwAsContext {
		return this.getRuleContext(0, KwAsContext);
	}
	public codeBlock(): CodeBlockContext {
		return this.getRuleContext(0, CodeBlockContext);
	}
	public orReplace(): OrReplaceContext | undefined {
		return this.tryGetRuleContext(0, OrReplaceContext);
	}
	public ifNotExist(): IfNotExistContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistContext);
	}
	public keyspace(): KeyspaceContext | undefined {
		return this.tryGetRuleContext(0, KeyspaceContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CqlParser.DOT, 0); }
	public paramList(): ParamListContext | undefined {
		return this.tryGetRuleContext(0, ParamListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_createFunction; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterCreateFunction) listener.enterCreateFunction(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitCreateFunction) listener.exitCreateFunction(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitCreateFunction) return visitor.visitCreateFunction(this);
		else return visitor.visitChildren(this);
	}
}


export class CodeBlockContext extends ParserRuleContext {
	public CODE_BLOCK(): TerminalNode { return this.getToken(CqlParser.CODE_BLOCK, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_codeBlock; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterCodeBlock) listener.enterCodeBlock(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitCodeBlock) listener.exitCodeBlock(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitCodeBlock) return visitor.visitCodeBlock(this);
		else return visitor.visitChildren(this);
	}
}


export class ParamListContext extends ParserRuleContext {
	public param(): ParamContext[];
	public param(i: number): ParamContext;
	public param(i?: number): ParamContext | ParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParamContext);
		} else {
			return this.getRuleContext(i, ParamContext);
		}
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_paramList; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterParamList) listener.enterParamList(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitParamList) listener.exitParamList(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitParamList) return visitor.visitParamList(this);
		else return visitor.visitChildren(this);
	}
}


export class ReturnModeContext extends ParserRuleContext {
	public kwOn(): KwOnContext {
		return this.getRuleContext(0, KwOnContext);
	}
	public kwNull(): KwNullContext[];
	public kwNull(i: number): KwNullContext;
	public kwNull(i?: number): KwNullContext | KwNullContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KwNullContext);
		} else {
			return this.getRuleContext(i, KwNullContext);
		}
	}
	public kwInput(): KwInputContext {
		return this.getRuleContext(0, KwInputContext);
	}
	public kwCalled(): KwCalledContext | undefined {
		return this.tryGetRuleContext(0, KwCalledContext);
	}
	public kwReturns(): KwReturnsContext | undefined {
		return this.tryGetRuleContext(0, KwReturnsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_returnMode; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterReturnMode) listener.enterReturnMode(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitReturnMode) listener.exitReturnMode(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitReturnMode) return visitor.visitReturnMode(this);
		else return visitor.visitChildren(this);
	}
}


export class CreateAggregateContext extends ParserRuleContext {
	public kwCreate(): KwCreateContext {
		return this.getRuleContext(0, KwCreateContext);
	}
	public kwAggregate(): KwAggregateContext {
		return this.getRuleContext(0, KwAggregateContext);
	}
	public aggregate(): AggregateContext {
		return this.getRuleContext(0, AggregateContext);
	}
	public syntaxBracketLr(): SyntaxBracketLrContext {
		return this.getRuleContext(0, SyntaxBracketLrContext);
	}
	public dataType(): DataTypeContext[];
	public dataType(i: number): DataTypeContext;
	public dataType(i?: number): DataTypeContext | DataTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DataTypeContext);
		} else {
			return this.getRuleContext(i, DataTypeContext);
		}
	}
	public syntaxBracketRr(): SyntaxBracketRrContext {
		return this.getRuleContext(0, SyntaxBracketRrContext);
	}
	public kwSfunc(): KwSfuncContext {
		return this.getRuleContext(0, KwSfuncContext);
	}
	public function(): FunctionContext[];
	public function(i: number): FunctionContext;
	public function(i?: number): FunctionContext | FunctionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionContext);
		} else {
			return this.getRuleContext(i, FunctionContext);
		}
	}
	public kwStype(): KwStypeContext {
		return this.getRuleContext(0, KwStypeContext);
	}
	public kwFinalfunc(): KwFinalfuncContext {
		return this.getRuleContext(0, KwFinalfuncContext);
	}
	public kwInitcond(): KwInitcondContext {
		return this.getRuleContext(0, KwInitcondContext);
	}
	public initCondDefinition(): InitCondDefinitionContext {
		return this.getRuleContext(0, InitCondDefinitionContext);
	}
	public orReplace(): OrReplaceContext | undefined {
		return this.tryGetRuleContext(0, OrReplaceContext);
	}
	public ifNotExist(): IfNotExistContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistContext);
	}
	public keyspace(): KeyspaceContext | undefined {
		return this.tryGetRuleContext(0, KeyspaceContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CqlParser.DOT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_createAggregate; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterCreateAggregate) listener.enterCreateAggregate(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitCreateAggregate) listener.exitCreateAggregate(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitCreateAggregate) return visitor.visitCreateAggregate(this);
		else return visitor.visitChildren(this);
	}
}


export class InitCondDefinitionContext extends ParserRuleContext {
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	public initCondList(): InitCondListContext | undefined {
		return this.tryGetRuleContext(0, InitCondListContext);
	}
	public initCondListNested(): InitCondListNestedContext | undefined {
		return this.tryGetRuleContext(0, InitCondListNestedContext);
	}
	public initCondHash(): InitCondHashContext | undefined {
		return this.tryGetRuleContext(0, InitCondHashContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_initCondDefinition; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterInitCondDefinition) listener.enterInitCondDefinition(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitInitCondDefinition) listener.exitInitCondDefinition(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitInitCondDefinition) return visitor.visitInitCondDefinition(this);
		else return visitor.visitChildren(this);
	}
}


export class InitCondHashContext extends ParserRuleContext {
	public syntaxBracketLc(): SyntaxBracketLcContext {
		return this.getRuleContext(0, SyntaxBracketLcContext);
	}
	public initCondHashItem(): InitCondHashItemContext[];
	public initCondHashItem(i: number): InitCondHashItemContext;
	public initCondHashItem(i?: number): InitCondHashItemContext | InitCondHashItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InitCondHashItemContext);
		} else {
			return this.getRuleContext(i, InitCondHashItemContext);
		}
	}
	public syntaxBracketRc(): SyntaxBracketRcContext {
		return this.getRuleContext(0, SyntaxBracketRcContext);
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_initCondHash; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterInitCondHash) listener.enterInitCondHash(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitInitCondHash) listener.exitInitCondHash(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitInitCondHash) return visitor.visitInitCondHash(this);
		else return visitor.visitChildren(this);
	}
}


export class InitCondHashItemContext extends ParserRuleContext {
	public hashKey(): HashKeyContext {
		return this.getRuleContext(0, HashKeyContext);
	}
	public COLON(): TerminalNode { return this.getToken(CqlParser.COLON, 0); }
	public initCondDefinition(): InitCondDefinitionContext {
		return this.getRuleContext(0, InitCondDefinitionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_initCondHashItem; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterInitCondHashItem) listener.enterInitCondHashItem(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitInitCondHashItem) listener.exitInitCondHashItem(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitInitCondHashItem) return visitor.visitInitCondHashItem(this);
		else return visitor.visitChildren(this);
	}
}


export class InitCondListNestedContext extends ParserRuleContext {
	public syntaxBracketLr(): SyntaxBracketLrContext {
		return this.getRuleContext(0, SyntaxBracketLrContext);
	}
	public initCondList(): InitCondListContext[];
	public initCondList(i: number): InitCondListContext;
	public initCondList(i?: number): InitCondListContext | InitCondListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InitCondListContext);
		} else {
			return this.getRuleContext(i, InitCondListContext);
		}
	}
	public syntaxBracketRr(): SyntaxBracketRrContext {
		return this.getRuleContext(0, SyntaxBracketRrContext);
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_initCondListNested; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterInitCondListNested) listener.enterInitCondListNested(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitInitCondListNested) listener.exitInitCondListNested(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitInitCondListNested) return visitor.visitInitCondListNested(this);
		else return visitor.visitChildren(this);
	}
}


export class InitCondListContext extends ParserRuleContext {
	public syntaxBracketLr(): SyntaxBracketLrContext {
		return this.getRuleContext(0, SyntaxBracketLrContext);
	}
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	public syntaxBracketRr(): SyntaxBracketRrContext {
		return this.getRuleContext(0, SyntaxBracketRrContext);
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_initCondList; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterInitCondList) listener.enterInitCondList(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitInitCondList) listener.exitInitCondList(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitInitCondList) return visitor.visitInitCondList(this);
		else return visitor.visitChildren(this);
	}
}


export class OrReplaceContext extends ParserRuleContext {
	public kwOr(): KwOrContext {
		return this.getRuleContext(0, KwOrContext);
	}
	public kwReplace(): KwReplaceContext {
		return this.getRuleContext(0, KwReplaceContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_orReplace; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterOrReplace) listener.enterOrReplace(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitOrReplace) listener.exitOrReplace(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitOrReplace) return visitor.visitOrReplace(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterUserContext extends ParserRuleContext {
	public kwAlter(): KwAlterContext {
		return this.getRuleContext(0, KwAlterContext);
	}
	public kwUser(): KwUserContext {
		return this.getRuleContext(0, KwUserContext);
	}
	public user(): UserContext {
		return this.getRuleContext(0, UserContext);
	}
	public kwWith(): KwWithContext {
		return this.getRuleContext(0, KwWithContext);
	}
	public userPassword(): UserPasswordContext {
		return this.getRuleContext(0, UserPasswordContext);
	}
	public userSuperUser(): UserSuperUserContext | undefined {
		return this.tryGetRuleContext(0, UserSuperUserContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterUser; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterUser) listener.enterAlterUser(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterUser) listener.exitAlterUser(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterUser) return visitor.visitAlterUser(this);
		else return visitor.visitChildren(this);
	}
}


export class UserPasswordContext extends ParserRuleContext {
	public kwPassword(): KwPasswordContext {
		return this.getRuleContext(0, KwPasswordContext);
	}
	public literalString(): LiteralStringContext {
		return this.getRuleContext(0, LiteralStringContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_userPassword; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterUserPassword) listener.enterUserPassword(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitUserPassword) listener.exitUserPassword(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitUserPassword) return visitor.visitUserPassword(this);
		else return visitor.visitChildren(this);
	}
}


export class UserSuperUserContext extends ParserRuleContext {
	public kwSuperuser(): KwSuperuserContext | undefined {
		return this.tryGetRuleContext(0, KwSuperuserContext);
	}
	public kwNosuperuser(): KwNosuperuserContext | undefined {
		return this.tryGetRuleContext(0, KwNosuperuserContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_userSuperUser; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterUserSuperUser) listener.enterUserSuperUser(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitUserSuperUser) listener.exitUserSuperUser(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitUserSuperUser) return visitor.visitUserSuperUser(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterTypeContext extends ParserRuleContext {
	public kwAlter(): KwAlterContext {
		return this.getRuleContext(0, KwAlterContext);
	}
	public kwType(): KwTypeContext {
		return this.getRuleContext(0, KwTypeContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public alterTypeOperation(): AlterTypeOperationContext {
		return this.getRuleContext(0, AlterTypeOperationContext);
	}
	public keyspace(): KeyspaceContext | undefined {
		return this.tryGetRuleContext(0, KeyspaceContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CqlParser.DOT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterType; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterType) listener.enterAlterType(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterType) listener.exitAlterType(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterType) return visitor.visitAlterType(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterTypeOperationContext extends ParserRuleContext {
	public alterTypeAlterType(): AlterTypeAlterTypeContext | undefined {
		return this.tryGetRuleContext(0, AlterTypeAlterTypeContext);
	}
	public alterTypeAdd(): AlterTypeAddContext | undefined {
		return this.tryGetRuleContext(0, AlterTypeAddContext);
	}
	public alterTypeRename(): AlterTypeRenameContext | undefined {
		return this.tryGetRuleContext(0, AlterTypeRenameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterTypeOperation; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterTypeOperation) listener.enterAlterTypeOperation(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterTypeOperation) listener.exitAlterTypeOperation(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterTypeOperation) return visitor.visitAlterTypeOperation(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterTypeRenameContext extends ParserRuleContext {
	public kwRename(): KwRenameContext {
		return this.getRuleContext(0, KwRenameContext);
	}
	public alterTypeRenameList(): AlterTypeRenameListContext {
		return this.getRuleContext(0, AlterTypeRenameListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterTypeRename; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterTypeRename) listener.enterAlterTypeRename(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterTypeRename) listener.exitAlterTypeRename(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterTypeRename) return visitor.visitAlterTypeRename(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterTypeRenameListContext extends ParserRuleContext {
	public alterTypeRenameItem(): AlterTypeRenameItemContext[];
	public alterTypeRenameItem(i: number): AlterTypeRenameItemContext;
	public alterTypeRenameItem(i?: number): AlterTypeRenameItemContext | AlterTypeRenameItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AlterTypeRenameItemContext);
		} else {
			return this.getRuleContext(i, AlterTypeRenameItemContext);
		}
	}
	public kwAnd(): KwAndContext[];
	public kwAnd(i: number): KwAndContext;
	public kwAnd(i?: number): KwAndContext | KwAndContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KwAndContext);
		} else {
			return this.getRuleContext(i, KwAndContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterTypeRenameList; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterTypeRenameList) listener.enterAlterTypeRenameList(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterTypeRenameList) listener.exitAlterTypeRenameList(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterTypeRenameList) return visitor.visitAlterTypeRenameList(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterTypeRenameItemContext extends ParserRuleContext {
	public column(): ColumnContext[];
	public column(i: number): ColumnContext;
	public column(i?: number): ColumnContext | ColumnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnContext);
		} else {
			return this.getRuleContext(i, ColumnContext);
		}
	}
	public kwTo(): KwToContext {
		return this.getRuleContext(0, KwToContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterTypeRenameItem; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterTypeRenameItem) listener.enterAlterTypeRenameItem(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterTypeRenameItem) listener.exitAlterTypeRenameItem(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterTypeRenameItem) return visitor.visitAlterTypeRenameItem(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterTypeAddContext extends ParserRuleContext {
	public kwAdd(): KwAddContext {
		return this.getRuleContext(0, KwAddContext);
	}
	public column(): ColumnContext[];
	public column(i: number): ColumnContext;
	public column(i?: number): ColumnContext | ColumnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnContext);
		} else {
			return this.getRuleContext(i, ColumnContext);
		}
	}
	public dataType(): DataTypeContext[];
	public dataType(i: number): DataTypeContext;
	public dataType(i?: number): DataTypeContext | DataTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DataTypeContext);
		} else {
			return this.getRuleContext(i, DataTypeContext);
		}
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterTypeAdd; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterTypeAdd) listener.enterAlterTypeAdd(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterTypeAdd) listener.exitAlterTypeAdd(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterTypeAdd) return visitor.visitAlterTypeAdd(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterTypeAlterTypeContext extends ParserRuleContext {
	public kwAlter(): KwAlterContext {
		return this.getRuleContext(0, KwAlterContext);
	}
	public column(): ColumnContext {
		return this.getRuleContext(0, ColumnContext);
	}
	public kwType(): KwTypeContext {
		return this.getRuleContext(0, KwTypeContext);
	}
	public dataType(): DataTypeContext {
		return this.getRuleContext(0, DataTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterTypeAlterType; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterTypeAlterType) listener.enterAlterTypeAlterType(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterTypeAlterType) listener.exitAlterTypeAlterType(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterTypeAlterType) return visitor.visitAlterTypeAlterType(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterTableContext extends ParserRuleContext {
	public kwAlter(): KwAlterContext {
		return this.getRuleContext(0, KwAlterContext);
	}
	public kwTable(): KwTableContext {
		return this.getRuleContext(0, KwTableContext);
	}
	public table(): TableContext {
		return this.getRuleContext(0, TableContext);
	}
	public alterTableOperation(): AlterTableOperationContext {
		return this.getRuleContext(0, AlterTableOperationContext);
	}
	public keyspace(): KeyspaceContext | undefined {
		return this.tryGetRuleContext(0, KeyspaceContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CqlParser.DOT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterTable; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterTable) listener.enterAlterTable(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterTable) listener.exitAlterTable(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterTable) return visitor.visitAlterTable(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterTableOperationContext extends ParserRuleContext {
	public alterTableAdd(): AlterTableAddContext | undefined {
		return this.tryGetRuleContext(0, AlterTableAddContext);
	}
	public alterTableDropColumns(): AlterTableDropColumnsContext | undefined {
		return this.tryGetRuleContext(0, AlterTableDropColumnsContext);
	}
	public alterTableDropCompactStorage(): AlterTableDropCompactStorageContext | undefined {
		return this.tryGetRuleContext(0, AlterTableDropCompactStorageContext);
	}
	public alterTableRename(): AlterTableRenameContext | undefined {
		return this.tryGetRuleContext(0, AlterTableRenameContext);
	}
	public alterTableWith(): AlterTableWithContext | undefined {
		return this.tryGetRuleContext(0, AlterTableWithContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterTableOperation; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterTableOperation) listener.enterAlterTableOperation(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterTableOperation) listener.exitAlterTableOperation(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterTableOperation) return visitor.visitAlterTableOperation(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterTableWithContext extends ParserRuleContext {
	public kwWith(): KwWithContext {
		return this.getRuleContext(0, KwWithContext);
	}
	public tableOptions(): TableOptionsContext {
		return this.getRuleContext(0, TableOptionsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterTableWith; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterTableWith) listener.enterAlterTableWith(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterTableWith) listener.exitAlterTableWith(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterTableWith) return visitor.visitAlterTableWith(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterTableRenameContext extends ParserRuleContext {
	public kwRename(): KwRenameContext {
		return this.getRuleContext(0, KwRenameContext);
	}
	public column(): ColumnContext[];
	public column(i: number): ColumnContext;
	public column(i?: number): ColumnContext | ColumnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnContext);
		} else {
			return this.getRuleContext(i, ColumnContext);
		}
	}
	public kwTo(): KwToContext {
		return this.getRuleContext(0, KwToContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterTableRename; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterTableRename) listener.enterAlterTableRename(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterTableRename) listener.exitAlterTableRename(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterTableRename) return visitor.visitAlterTableRename(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterTableDropCompactStorageContext extends ParserRuleContext {
	public kwDrop(): KwDropContext {
		return this.getRuleContext(0, KwDropContext);
	}
	public kwCompact(): KwCompactContext {
		return this.getRuleContext(0, KwCompactContext);
	}
	public kwStorage(): KwStorageContext {
		return this.getRuleContext(0, KwStorageContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterTableDropCompactStorage; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterTableDropCompactStorage) listener.enterAlterTableDropCompactStorage(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterTableDropCompactStorage) listener.exitAlterTableDropCompactStorage(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterTableDropCompactStorage) return visitor.visitAlterTableDropCompactStorage(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterTableDropColumnsContext extends ParserRuleContext {
	public kwDrop(): KwDropContext {
		return this.getRuleContext(0, KwDropContext);
	}
	public alterTableDropColumnList(): AlterTableDropColumnListContext {
		return this.getRuleContext(0, AlterTableDropColumnListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterTableDropColumns; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterTableDropColumns) listener.enterAlterTableDropColumns(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterTableDropColumns) listener.exitAlterTableDropColumns(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterTableDropColumns) return visitor.visitAlterTableDropColumns(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterTableDropColumnListContext extends ParserRuleContext {
	public column(): ColumnContext[];
	public column(i: number): ColumnContext;
	public column(i?: number): ColumnContext | ColumnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnContext);
		} else {
			return this.getRuleContext(i, ColumnContext);
		}
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterTableDropColumnList; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterTableDropColumnList) listener.enterAlterTableDropColumnList(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterTableDropColumnList) listener.exitAlterTableDropColumnList(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterTableDropColumnList) return visitor.visitAlterTableDropColumnList(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterTableAddContext extends ParserRuleContext {
	public kwAdd(): KwAddContext {
		return this.getRuleContext(0, KwAddContext);
	}
	public alterTableColumnDefinition(): AlterTableColumnDefinitionContext {
		return this.getRuleContext(0, AlterTableColumnDefinitionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterTableAdd; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterTableAdd) listener.enterAlterTableAdd(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterTableAdd) listener.exitAlterTableAdd(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterTableAdd) return visitor.visitAlterTableAdd(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterTableColumnDefinitionContext extends ParserRuleContext {
	public column(): ColumnContext[];
	public column(i: number): ColumnContext;
	public column(i?: number): ColumnContext | ColumnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnContext);
		} else {
			return this.getRuleContext(i, ColumnContext);
		}
	}
	public dataType(): DataTypeContext[];
	public dataType(i: number): DataTypeContext;
	public dataType(i?: number): DataTypeContext | DataTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DataTypeContext);
		} else {
			return this.getRuleContext(i, DataTypeContext);
		}
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterTableColumnDefinition; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterTableColumnDefinition) listener.enterAlterTableColumnDefinition(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterTableColumnDefinition) listener.exitAlterTableColumnDefinition(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterTableColumnDefinition) return visitor.visitAlterTableColumnDefinition(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterRoleContext extends ParserRuleContext {
	public kwAlter(): KwAlterContext {
		return this.getRuleContext(0, KwAlterContext);
	}
	public kwRole(): KwRoleContext {
		return this.getRuleContext(0, KwRoleContext);
	}
	public role(): RoleContext {
		return this.getRuleContext(0, RoleContext);
	}
	public roleWith(): RoleWithContext | undefined {
		return this.tryGetRuleContext(0, RoleWithContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterRole; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterRole) listener.enterAlterRole(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterRole) listener.exitAlterRole(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterRole) return visitor.visitAlterRole(this);
		else return visitor.visitChildren(this);
	}
}


export class RoleWithContext extends ParserRuleContext {
	public kwWith(): KwWithContext {
		return this.getRuleContext(0, KwWithContext);
	}
	public roleWithOptions(): RoleWithOptionsContext[];
	public roleWithOptions(i: number): RoleWithOptionsContext;
	public roleWithOptions(i?: number): RoleWithOptionsContext | RoleWithOptionsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RoleWithOptionsContext);
		} else {
			return this.getRuleContext(i, RoleWithOptionsContext);
		}
	}
	public kwAnd(): KwAndContext[];
	public kwAnd(i: number): KwAndContext;
	public kwAnd(i?: number): KwAndContext | KwAndContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KwAndContext);
		} else {
			return this.getRuleContext(i, KwAndContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_roleWith; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterRoleWith) listener.enterRoleWith(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitRoleWith) listener.exitRoleWith(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitRoleWith) return visitor.visitRoleWith(this);
		else return visitor.visitChildren(this);
	}
}


export class RoleWithOptionsContext extends ParserRuleContext {
	public kwPassword(): KwPasswordContext | undefined {
		return this.tryGetRuleContext(0, KwPasswordContext);
	}
	public OPERATOR_EQ(): TerminalNode { return this.getToken(CqlParser.OPERATOR_EQ, 0); }
	public literalString(): LiteralStringContext | undefined {
		return this.tryGetRuleContext(0, LiteralStringContext);
	}
	public kwLogin(): KwLoginContext | undefined {
		return this.tryGetRuleContext(0, KwLoginContext);
	}
	public literalBoolean(): LiteralBooleanContext | undefined {
		return this.tryGetRuleContext(0, LiteralBooleanContext);
	}
	public kwSuperuser(): KwSuperuserContext | undefined {
		return this.tryGetRuleContext(0, KwSuperuserContext);
	}
	public kwOptions(): KwOptionsContext | undefined {
		return this.tryGetRuleContext(0, KwOptionsContext);
	}
	public optionHash(): OptionHashContext | undefined {
		return this.tryGetRuleContext(0, OptionHashContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_roleWithOptions; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterRoleWithOptions) listener.enterRoleWithOptions(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitRoleWithOptions) listener.exitRoleWithOptions(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitRoleWithOptions) return visitor.visitRoleWithOptions(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterMaterializedViewContext extends ParserRuleContext {
	public kwAlter(): KwAlterContext {
		return this.getRuleContext(0, KwAlterContext);
	}
	public kwMaterialized(): KwMaterializedContext {
		return this.getRuleContext(0, KwMaterializedContext);
	}
	public kwView(): KwViewContext {
		return this.getRuleContext(0, KwViewContext);
	}
	public materializedView(): MaterializedViewContext {
		return this.getRuleContext(0, MaterializedViewContext);
	}
	public keyspace(): KeyspaceContext | undefined {
		return this.tryGetRuleContext(0, KeyspaceContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CqlParser.DOT, 0); }
	public kwWith(): KwWithContext | undefined {
		return this.tryGetRuleContext(0, KwWithContext);
	}
	public tableOptions(): TableOptionsContext | undefined {
		return this.tryGetRuleContext(0, TableOptionsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterMaterializedView; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterMaterializedView) listener.enterAlterMaterializedView(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterMaterializedView) listener.exitAlterMaterializedView(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterMaterializedView) return visitor.visitAlterMaterializedView(this);
		else return visitor.visitChildren(this);
	}
}


export class DropUserContext extends ParserRuleContext {
	public kwDrop(): KwDropContext {
		return this.getRuleContext(0, KwDropContext);
	}
	public kwUser(): KwUserContext {
		return this.getRuleContext(0, KwUserContext);
	}
	public user(): UserContext {
		return this.getRuleContext(0, UserContext);
	}
	public ifExist(): IfExistContext | undefined {
		return this.tryGetRuleContext(0, IfExistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dropUser; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDropUser) listener.enterDropUser(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDropUser) listener.exitDropUser(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDropUser) return visitor.visitDropUser(this);
		else return visitor.visitChildren(this);
	}
}


export class DropTypeContext extends ParserRuleContext {
	public kwDrop(): KwDropContext {
		return this.getRuleContext(0, KwDropContext);
	}
	public kwType(): KwTypeContext {
		return this.getRuleContext(0, KwTypeContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public ifExist(): IfExistContext | undefined {
		return this.tryGetRuleContext(0, IfExistContext);
	}
	public keyspace(): KeyspaceContext | undefined {
		return this.tryGetRuleContext(0, KeyspaceContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CqlParser.DOT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dropType; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDropType) listener.enterDropType(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDropType) listener.exitDropType(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDropType) return visitor.visitDropType(this);
		else return visitor.visitChildren(this);
	}
}


export class DropMaterializedViewContext extends ParserRuleContext {
	public kwDrop(): KwDropContext {
		return this.getRuleContext(0, KwDropContext);
	}
	public kwMaterialized(): KwMaterializedContext {
		return this.getRuleContext(0, KwMaterializedContext);
	}
	public kwView(): KwViewContext {
		return this.getRuleContext(0, KwViewContext);
	}
	public materializedView(): MaterializedViewContext {
		return this.getRuleContext(0, MaterializedViewContext);
	}
	public ifExist(): IfExistContext | undefined {
		return this.tryGetRuleContext(0, IfExistContext);
	}
	public keyspace(): KeyspaceContext | undefined {
		return this.tryGetRuleContext(0, KeyspaceContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CqlParser.DOT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dropMaterializedView; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDropMaterializedView) listener.enterDropMaterializedView(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDropMaterializedView) listener.exitDropMaterializedView(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDropMaterializedView) return visitor.visitDropMaterializedView(this);
		else return visitor.visitChildren(this);
	}
}


export class DropAggregateContext extends ParserRuleContext {
	public kwDrop(): KwDropContext {
		return this.getRuleContext(0, KwDropContext);
	}
	public kwAggregate(): KwAggregateContext {
		return this.getRuleContext(0, KwAggregateContext);
	}
	public aggregate(): AggregateContext {
		return this.getRuleContext(0, AggregateContext);
	}
	public ifExist(): IfExistContext | undefined {
		return this.tryGetRuleContext(0, IfExistContext);
	}
	public keyspace(): KeyspaceContext | undefined {
		return this.tryGetRuleContext(0, KeyspaceContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CqlParser.DOT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dropAggregate; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDropAggregate) listener.enterDropAggregate(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDropAggregate) listener.exitDropAggregate(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDropAggregate) return visitor.visitDropAggregate(this);
		else return visitor.visitChildren(this);
	}
}


export class DropFunctionContext extends ParserRuleContext {
	public kwDrop(): KwDropContext {
		return this.getRuleContext(0, KwDropContext);
	}
	public kwFunction(): KwFunctionContext {
		return this.getRuleContext(0, KwFunctionContext);
	}
	public function(): FunctionContext {
		return this.getRuleContext(0, FunctionContext);
	}
	public ifExist(): IfExistContext | undefined {
		return this.tryGetRuleContext(0, IfExistContext);
	}
	public keyspace(): KeyspaceContext | undefined {
		return this.tryGetRuleContext(0, KeyspaceContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CqlParser.DOT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dropFunction; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDropFunction) listener.enterDropFunction(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDropFunction) listener.exitDropFunction(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDropFunction) return visitor.visitDropFunction(this);
		else return visitor.visitChildren(this);
	}
}


export class DropTriggerContext extends ParserRuleContext {
	public kwDrop(): KwDropContext {
		return this.getRuleContext(0, KwDropContext);
	}
	public kwTrigger(): KwTriggerContext {
		return this.getRuleContext(0, KwTriggerContext);
	}
	public trigger(): TriggerContext {
		return this.getRuleContext(0, TriggerContext);
	}
	public kwOn(): KwOnContext {
		return this.getRuleContext(0, KwOnContext);
	}
	public table(): TableContext {
		return this.getRuleContext(0, TableContext);
	}
	public ifExist(): IfExistContext | undefined {
		return this.tryGetRuleContext(0, IfExistContext);
	}
	public keyspace(): KeyspaceContext | undefined {
		return this.tryGetRuleContext(0, KeyspaceContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CqlParser.DOT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dropTrigger; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDropTrigger) listener.enterDropTrigger(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDropTrigger) listener.exitDropTrigger(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDropTrigger) return visitor.visitDropTrigger(this);
		else return visitor.visitChildren(this);
	}
}


export class DropRoleContext extends ParserRuleContext {
	public kwDrop(): KwDropContext {
		return this.getRuleContext(0, KwDropContext);
	}
	public kwRole(): KwRoleContext {
		return this.getRuleContext(0, KwRoleContext);
	}
	public role(): RoleContext {
		return this.getRuleContext(0, RoleContext);
	}
	public ifExist(): IfExistContext | undefined {
		return this.tryGetRuleContext(0, IfExistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dropRole; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDropRole) listener.enterDropRole(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDropRole) listener.exitDropRole(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDropRole) return visitor.visitDropRole(this);
		else return visitor.visitChildren(this);
	}
}


export class DropTableContext extends ParserRuleContext {
	public kwDrop(): KwDropContext {
		return this.getRuleContext(0, KwDropContext);
	}
	public kwTable(): KwTableContext {
		return this.getRuleContext(0, KwTableContext);
	}
	public table(): TableContext {
		return this.getRuleContext(0, TableContext);
	}
	public ifExist(): IfExistContext | undefined {
		return this.tryGetRuleContext(0, IfExistContext);
	}
	public keyspace(): KeyspaceContext | undefined {
		return this.tryGetRuleContext(0, KeyspaceContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CqlParser.DOT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dropTable; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDropTable) listener.enterDropTable(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDropTable) listener.exitDropTable(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDropTable) return visitor.visitDropTable(this);
		else return visitor.visitChildren(this);
	}
}


export class DropKeyspaceContext extends ParserRuleContext {
	public kwDrop(): KwDropContext {
		return this.getRuleContext(0, KwDropContext);
	}
	public kwKeyspace(): KwKeyspaceContext {
		return this.getRuleContext(0, KwKeyspaceContext);
	}
	public keyspace(): KeyspaceContext {
		return this.getRuleContext(0, KeyspaceContext);
	}
	public ifExist(): IfExistContext | undefined {
		return this.tryGetRuleContext(0, IfExistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dropKeyspace; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDropKeyspace) listener.enterDropKeyspace(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDropKeyspace) listener.exitDropKeyspace(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDropKeyspace) return visitor.visitDropKeyspace(this);
		else return visitor.visitChildren(this);
	}
}


export class DropIndexContext extends ParserRuleContext {
	public kwDrop(): KwDropContext {
		return this.getRuleContext(0, KwDropContext);
	}
	public kwIndex(): KwIndexContext {
		return this.getRuleContext(0, KwIndexContext);
	}
	public indexName(): IndexNameContext {
		return this.getRuleContext(0, IndexNameContext);
	}
	public ifExist(): IfExistContext | undefined {
		return this.tryGetRuleContext(0, IfExistContext);
	}
	public keyspace(): KeyspaceContext | undefined {
		return this.tryGetRuleContext(0, KeyspaceContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CqlParser.DOT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dropIndex; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDropIndex) listener.enterDropIndex(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDropIndex) listener.exitDropIndex(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDropIndex) return visitor.visitDropIndex(this);
		else return visitor.visitChildren(this);
	}
}


export class CreateTableContext extends ParserRuleContext {
	public kwCreate(): KwCreateContext {
		return this.getRuleContext(0, KwCreateContext);
	}
	public kwTable(): KwTableContext {
		return this.getRuleContext(0, KwTableContext);
	}
	public table(): TableContext {
		return this.getRuleContext(0, TableContext);
	}
	public syntaxBracketLr(): SyntaxBracketLrContext {
		return this.getRuleContext(0, SyntaxBracketLrContext);
	}
	public columnDefinitionList(): ColumnDefinitionListContext {
		return this.getRuleContext(0, ColumnDefinitionListContext);
	}
	public syntaxBracketRr(): SyntaxBracketRrContext {
		return this.getRuleContext(0, SyntaxBracketRrContext);
	}
	public ifNotExist(): IfNotExistContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistContext);
	}
	public keyspace(): KeyspaceContext | undefined {
		return this.tryGetRuleContext(0, KeyspaceContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CqlParser.DOT, 0); }
	public withElement(): WithElementContext | undefined {
		return this.tryGetRuleContext(0, WithElementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_createTable; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterCreateTable) listener.enterCreateTable(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitCreateTable) listener.exitCreateTable(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitCreateTable) return visitor.visitCreateTable(this);
		else return visitor.visitChildren(this);
	}
}


export class WithElementContext extends ParserRuleContext {
	public kwWith(): KwWithContext {
		return this.getRuleContext(0, KwWithContext);
	}
	public tableOptions(): TableOptionsContext | undefined {
		return this.tryGetRuleContext(0, TableOptionsContext);
	}
	public clusteringOrder(): ClusteringOrderContext | undefined {
		return this.tryGetRuleContext(0, ClusteringOrderContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_withElement; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterWithElement) listener.enterWithElement(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitWithElement) listener.exitWithElement(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitWithElement) return visitor.visitWithElement(this);
		else return visitor.visitChildren(this);
	}
}


export class ClusteringOrderContext extends ParserRuleContext {
	public kwClustering(): KwClusteringContext {
		return this.getRuleContext(0, KwClusteringContext);
	}
	public kwOrder(): KwOrderContext {
		return this.getRuleContext(0, KwOrderContext);
	}
	public kwBy(): KwByContext {
		return this.getRuleContext(0, KwByContext);
	}
	public syntaxBracketLr(): SyntaxBracketLrContext {
		return this.getRuleContext(0, SyntaxBracketLrContext);
	}
	public column(): ColumnContext {
		return this.getRuleContext(0, ColumnContext);
	}
	public syntaxBracketRr(): SyntaxBracketRrContext {
		return this.getRuleContext(0, SyntaxBracketRrContext);
	}
	public orderDirection(): OrderDirectionContext | undefined {
		return this.tryGetRuleContext(0, OrderDirectionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_clusteringOrder; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterClusteringOrder) listener.enterClusteringOrder(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitClusteringOrder) listener.exitClusteringOrder(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitClusteringOrder) return visitor.visitClusteringOrder(this);
		else return visitor.visitChildren(this);
	}
}


export class TableOptionsContext extends ParserRuleContext {
	public tableOptionItem(): TableOptionItemContext[];
	public tableOptionItem(i: number): TableOptionItemContext;
	public tableOptionItem(i?: number): TableOptionItemContext | TableOptionItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TableOptionItemContext);
		} else {
			return this.getRuleContext(i, TableOptionItemContext);
		}
	}
	public kwAnd(): KwAndContext[];
	public kwAnd(i: number): KwAndContext;
	public kwAnd(i?: number): KwAndContext | KwAndContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KwAndContext);
		} else {
			return this.getRuleContext(i, KwAndContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_tableOptions; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterTableOptions) listener.enterTableOptions(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitTableOptions) listener.exitTableOptions(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitTableOptions) return visitor.visitTableOptions(this);
		else return visitor.visitChildren(this);
	}
}


export class TableOptionItemContext extends ParserRuleContext {
	public tableOptionName(): TableOptionNameContext {
		return this.getRuleContext(0, TableOptionNameContext);
	}
	public OPERATOR_EQ(): TerminalNode { return this.getToken(CqlParser.OPERATOR_EQ, 0); }
	public tableOptionValue(): TableOptionValueContext | undefined {
		return this.tryGetRuleContext(0, TableOptionValueContext);
	}
	public optionHash(): OptionHashContext | undefined {
		return this.tryGetRuleContext(0, OptionHashContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_tableOptionItem; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterTableOptionItem) listener.enterTableOptionItem(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitTableOptionItem) listener.exitTableOptionItem(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitTableOptionItem) return visitor.visitTableOptionItem(this);
		else return visitor.visitChildren(this);
	}
}


export class TableOptionNameContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode { return this.getToken(CqlParser.OBJECT_NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_tableOptionName; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterTableOptionName) listener.enterTableOptionName(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitTableOptionName) listener.exitTableOptionName(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitTableOptionName) return visitor.visitTableOptionName(this);
		else return visitor.visitChildren(this);
	}
}


export class TableOptionValueContext extends ParserRuleContext {
	public literalString(): LiteralStringContext | undefined {
		return this.tryGetRuleContext(0, LiteralStringContext);
	}
	public literalFloat(): LiteralFloatContext | undefined {
		return this.tryGetRuleContext(0, LiteralFloatContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_tableOptionValue; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterTableOptionValue) listener.enterTableOptionValue(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitTableOptionValue) listener.exitTableOptionValue(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitTableOptionValue) return visitor.visitTableOptionValue(this);
		else return visitor.visitChildren(this);
	}
}


export class OptionHashContext extends ParserRuleContext {
	public syntaxBracketLc(): SyntaxBracketLcContext {
		return this.getRuleContext(0, SyntaxBracketLcContext);
	}
	public optionHashItem(): OptionHashItemContext[];
	public optionHashItem(i: number): OptionHashItemContext;
	public optionHashItem(i?: number): OptionHashItemContext | OptionHashItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptionHashItemContext);
		} else {
			return this.getRuleContext(i, OptionHashItemContext);
		}
	}
	public syntaxBracketRc(): SyntaxBracketRcContext {
		return this.getRuleContext(0, SyntaxBracketRcContext);
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_optionHash; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterOptionHash) listener.enterOptionHash(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitOptionHash) listener.exitOptionHash(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitOptionHash) return visitor.visitOptionHash(this);
		else return visitor.visitChildren(this);
	}
}


export class OptionHashItemContext extends ParserRuleContext {
	public optionHashKey(): OptionHashKeyContext {
		return this.getRuleContext(0, OptionHashKeyContext);
	}
	public COLON(): TerminalNode { return this.getToken(CqlParser.COLON, 0); }
	public optionHashValue(): OptionHashValueContext {
		return this.getRuleContext(0, OptionHashValueContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_optionHashItem; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterOptionHashItem) listener.enterOptionHashItem(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitOptionHashItem) listener.exitOptionHashItem(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitOptionHashItem) return visitor.visitOptionHashItem(this);
		else return visitor.visitChildren(this);
	}
}


export class OptionHashKeyContext extends ParserRuleContext {
	public literalString(): LiteralStringContext {
		return this.getRuleContext(0, LiteralStringContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_optionHashKey; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterOptionHashKey) listener.enterOptionHashKey(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitOptionHashKey) listener.exitOptionHashKey(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitOptionHashKey) return visitor.visitOptionHashKey(this);
		else return visitor.visitChildren(this);
	}
}


export class OptionHashValueContext extends ParserRuleContext {
	public literalString(): LiteralStringContext | undefined {
		return this.tryGetRuleContext(0, LiteralStringContext);
	}
	public literalFloat(): LiteralFloatContext | undefined {
		return this.tryGetRuleContext(0, LiteralFloatContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_optionHashValue; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterOptionHashValue) listener.enterOptionHashValue(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitOptionHashValue) listener.exitOptionHashValue(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitOptionHashValue) return visitor.visitOptionHashValue(this);
		else return visitor.visitChildren(this);
	}
}


export class ColumnDefinitionListContext extends ParserRuleContext {
	public columnDefinition(): ColumnDefinitionContext[];
	public columnDefinition(i: number): ColumnDefinitionContext;
	public columnDefinition(i?: number): ColumnDefinitionContext | ColumnDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnDefinitionContext);
		} else {
			return this.getRuleContext(i, ColumnDefinitionContext);
		}
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	public primaryKeyElement(): PrimaryKeyElementContext | undefined {
		return this.tryGetRuleContext(0, PrimaryKeyElementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_columnDefinitionList; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterColumnDefinitionList) listener.enterColumnDefinitionList(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitColumnDefinitionList) listener.exitColumnDefinitionList(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitColumnDefinitionList) return visitor.visitColumnDefinitionList(this);
		else return visitor.visitChildren(this);
	}
}


export class ColumnDefinitionContext extends ParserRuleContext {
	public column(): ColumnContext {
		return this.getRuleContext(0, ColumnContext);
	}
	public dataType(): DataTypeContext {
		return this.getRuleContext(0, DataTypeContext);
	}
	public primaryKeyColumn(): PrimaryKeyColumnContext | undefined {
		return this.tryGetRuleContext(0, PrimaryKeyColumnContext);
	}
	public kwStatic(): KwStaticContext | undefined {
		return this.tryGetRuleContext(0, KwStaticContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_columnDefinition; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterColumnDefinition) listener.enterColumnDefinition(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitColumnDefinition) listener.exitColumnDefinition(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitColumnDefinition) return visitor.visitColumnDefinition(this);
		else return visitor.visitChildren(this);
	}
}


export class PrimaryKeyColumnContext extends ParserRuleContext {
	public kwPrimary(): KwPrimaryContext {
		return this.getRuleContext(0, KwPrimaryContext);
	}
	public kwKey(): KwKeyContext {
		return this.getRuleContext(0, KwKeyContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_primaryKeyColumn; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterPrimaryKeyColumn) listener.enterPrimaryKeyColumn(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitPrimaryKeyColumn) listener.exitPrimaryKeyColumn(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitPrimaryKeyColumn) return visitor.visitPrimaryKeyColumn(this);
		else return visitor.visitChildren(this);
	}
}


export class PrimaryKeyElementContext extends ParserRuleContext {
	public kwPrimary(): KwPrimaryContext {
		return this.getRuleContext(0, KwPrimaryContext);
	}
	public kwKey(): KwKeyContext {
		return this.getRuleContext(0, KwKeyContext);
	}
	public syntaxBracketLr(): SyntaxBracketLrContext {
		return this.getRuleContext(0, SyntaxBracketLrContext);
	}
	public primaryKeyDefinition(): PrimaryKeyDefinitionContext {
		return this.getRuleContext(0, PrimaryKeyDefinitionContext);
	}
	public syntaxBracketRr(): SyntaxBracketRrContext {
		return this.getRuleContext(0, SyntaxBracketRrContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_primaryKeyElement; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterPrimaryKeyElement) listener.enterPrimaryKeyElement(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitPrimaryKeyElement) listener.exitPrimaryKeyElement(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitPrimaryKeyElement) return visitor.visitPrimaryKeyElement(this);
		else return visitor.visitChildren(this);
	}
}


export class PrimaryKeyDefinitionContext extends ParserRuleContext {
	public singlePrimaryKey(): SinglePrimaryKeyContext | undefined {
		return this.tryGetRuleContext(0, SinglePrimaryKeyContext);
	}
	public compoundKey(): CompoundKeyContext | undefined {
		return this.tryGetRuleContext(0, CompoundKeyContext);
	}
	public compositeKey(): CompositeKeyContext | undefined {
		return this.tryGetRuleContext(0, CompositeKeyContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_primaryKeyDefinition; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterPrimaryKeyDefinition) listener.enterPrimaryKeyDefinition(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitPrimaryKeyDefinition) listener.exitPrimaryKeyDefinition(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitPrimaryKeyDefinition) return visitor.visitPrimaryKeyDefinition(this);
		else return visitor.visitChildren(this);
	}
}


export class SinglePrimaryKeyContext extends ParserRuleContext {
	public column(): ColumnContext {
		return this.getRuleContext(0, ColumnContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_singlePrimaryKey; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSinglePrimaryKey) listener.enterSinglePrimaryKey(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSinglePrimaryKey) listener.exitSinglePrimaryKey(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSinglePrimaryKey) return visitor.visitSinglePrimaryKey(this);
		else return visitor.visitChildren(this);
	}
}


export class CompoundKeyContext extends ParserRuleContext {
	public partitionKey(): PartitionKeyContext {
		return this.getRuleContext(0, PartitionKeyContext);
	}
	public syntaxComma(): SyntaxCommaContext | undefined {
		return this.tryGetRuleContext(0, SyntaxCommaContext);
	}
	public clusteringKeyList(): ClusteringKeyListContext | undefined {
		return this.tryGetRuleContext(0, ClusteringKeyListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_compoundKey; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterCompoundKey) listener.enterCompoundKey(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitCompoundKey) listener.exitCompoundKey(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitCompoundKey) return visitor.visitCompoundKey(this);
		else return visitor.visitChildren(this);
	}
}


export class CompositeKeyContext extends ParserRuleContext {
	public syntaxBracketLr(): SyntaxBracketLrContext {
		return this.getRuleContext(0, SyntaxBracketLrContext);
	}
	public partitionKeyList(): PartitionKeyListContext {
		return this.getRuleContext(0, PartitionKeyListContext);
	}
	public syntaxBracketRr(): SyntaxBracketRrContext {
		return this.getRuleContext(0, SyntaxBracketRrContext);
	}
	public syntaxComma(): SyntaxCommaContext | undefined {
		return this.tryGetRuleContext(0, SyntaxCommaContext);
	}
	public clusteringKeyList(): ClusteringKeyListContext | undefined {
		return this.tryGetRuleContext(0, ClusteringKeyListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_compositeKey; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterCompositeKey) listener.enterCompositeKey(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitCompositeKey) listener.exitCompositeKey(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitCompositeKey) return visitor.visitCompositeKey(this);
		else return visitor.visitChildren(this);
	}
}


export class PartitionKeyListContext extends ParserRuleContext {
	public partitionKey(): PartitionKeyContext[];
	public partitionKey(i: number): PartitionKeyContext;
	public partitionKey(i?: number): PartitionKeyContext | PartitionKeyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PartitionKeyContext);
		} else {
			return this.getRuleContext(i, PartitionKeyContext);
		}
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_partitionKeyList; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterPartitionKeyList) listener.enterPartitionKeyList(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitPartitionKeyList) listener.exitPartitionKeyList(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitPartitionKeyList) return visitor.visitPartitionKeyList(this);
		else return visitor.visitChildren(this);
	}
}


export class ClusteringKeyListContext extends ParserRuleContext {
	public clusteringKey(): ClusteringKeyContext[];
	public clusteringKey(i: number): ClusteringKeyContext;
	public clusteringKey(i?: number): ClusteringKeyContext | ClusteringKeyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClusteringKeyContext);
		} else {
			return this.getRuleContext(i, ClusteringKeyContext);
		}
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_clusteringKeyList; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterClusteringKeyList) listener.enterClusteringKeyList(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitClusteringKeyList) listener.exitClusteringKeyList(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitClusteringKeyList) return visitor.visitClusteringKeyList(this);
		else return visitor.visitChildren(this);
	}
}


export class PartitionKeyContext extends ParserRuleContext {
	public column(): ColumnContext {
		return this.getRuleContext(0, ColumnContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_partitionKey; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterPartitionKey) listener.enterPartitionKey(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitPartitionKey) listener.exitPartitionKey(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitPartitionKey) return visitor.visitPartitionKey(this);
		else return visitor.visitChildren(this);
	}
}


export class ClusteringKeyContext extends ParserRuleContext {
	public column(): ColumnContext {
		return this.getRuleContext(0, ColumnContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_clusteringKey; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterClusteringKey) listener.enterClusteringKey(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitClusteringKey) listener.exitClusteringKey(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitClusteringKey) return visitor.visitClusteringKey(this);
		else return visitor.visitChildren(this);
	}
}


export class ApplyBatchContext extends ParserRuleContext {
	public kwApply(): KwApplyContext {
		return this.getRuleContext(0, KwApplyContext);
	}
	public kwBatch(): KwBatchContext {
		return this.getRuleContext(0, KwBatchContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_applyBatch; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterApplyBatch) listener.enterApplyBatch(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitApplyBatch) listener.exitApplyBatch(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitApplyBatch) return visitor.visitApplyBatch(this);
		else return visitor.visitChildren(this);
	}
}


export class BeginBatchContext extends ParserRuleContext {
	public kwBegin(): KwBeginContext {
		return this.getRuleContext(0, KwBeginContext);
	}
	public kwBatch(): KwBatchContext {
		return this.getRuleContext(0, KwBatchContext);
	}
	public batchType(): BatchTypeContext | undefined {
		return this.tryGetRuleContext(0, BatchTypeContext);
	}
	public usingTimestampSpec(): UsingTimestampSpecContext | undefined {
		return this.tryGetRuleContext(0, UsingTimestampSpecContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_beginBatch; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterBeginBatch) listener.enterBeginBatch(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitBeginBatch) listener.exitBeginBatch(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitBeginBatch) return visitor.visitBeginBatch(this);
		else return visitor.visitChildren(this);
	}
}


export class BatchTypeContext extends ParserRuleContext {
	public kwLogged(): KwLoggedContext | undefined {
		return this.tryGetRuleContext(0, KwLoggedContext);
	}
	public kwUnlogged(): KwUnloggedContext | undefined {
		return this.tryGetRuleContext(0, KwUnloggedContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_batchType; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterBatchType) listener.enterBatchType(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitBatchType) listener.exitBatchType(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitBatchType) return visitor.visitBatchType(this);
		else return visitor.visitChildren(this);
	}
}


export class AlterKeyspaceContext extends ParserRuleContext {
	public kwAlter(): KwAlterContext {
		return this.getRuleContext(0, KwAlterContext);
	}
	public kwKeyspace(): KwKeyspaceContext {
		return this.getRuleContext(0, KwKeyspaceContext);
	}
	public keyspace(): KeyspaceContext {
		return this.getRuleContext(0, KeyspaceContext);
	}
	public kwWith(): KwWithContext {
		return this.getRuleContext(0, KwWithContext);
	}
	public kwReplication(): KwReplicationContext {
		return this.getRuleContext(0, KwReplicationContext);
	}
	public OPERATOR_EQ(): TerminalNode { return this.getToken(CqlParser.OPERATOR_EQ, 0); }
	public syntaxBracketLc(): SyntaxBracketLcContext {
		return this.getRuleContext(0, SyntaxBracketLcContext);
	}
	public replicationList(): ReplicationListContext {
		return this.getRuleContext(0, ReplicationListContext);
	}
	public syntaxBracketRc(): SyntaxBracketRcContext {
		return this.getRuleContext(0, SyntaxBracketRcContext);
	}
	public kwAnd(): KwAndContext | undefined {
		return this.tryGetRuleContext(0, KwAndContext);
	}
	public durableWrites(): DurableWritesContext | undefined {
		return this.tryGetRuleContext(0, DurableWritesContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_alterKeyspace; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAlterKeyspace) listener.enterAlterKeyspace(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAlterKeyspace) listener.exitAlterKeyspace(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAlterKeyspace) return visitor.visitAlterKeyspace(this);
		else return visitor.visitChildren(this);
	}
}


export class ReplicationListContext extends ParserRuleContext {
	public replicationListItem(): ReplicationListItemContext[];
	public replicationListItem(i: number): ReplicationListItemContext;
	public replicationListItem(i?: number): ReplicationListItemContext | ReplicationListItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ReplicationListItemContext);
		} else {
			return this.getRuleContext(i, ReplicationListItemContext);
		}
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_replicationList; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterReplicationList) listener.enterReplicationList(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitReplicationList) listener.exitReplicationList(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitReplicationList) return visitor.visitReplicationList(this);
		else return visitor.visitChildren(this);
	}
}


export class ReplicationListItemContext extends ParserRuleContext {
	public STRING_LITERAL(): TerminalNode[];
	public STRING_LITERAL(i: number): TerminalNode;
	public STRING_LITERAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CqlParser.STRING_LITERAL);
		} else {
			return this.getToken(CqlParser.STRING_LITERAL, i);
		}
	}
	public COLON(): TerminalNode { return this.getToken(CqlParser.COLON, 0); }
	public DECIMAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(CqlParser.DECIMAL_LITERAL, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_replicationListItem; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterReplicationListItem) listener.enterReplicationListItem(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitReplicationListItem) listener.exitReplicationListItem(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitReplicationListItem) return visitor.visitReplicationListItem(this);
		else return visitor.visitChildren(this);
	}
}


export class DurableWritesContext extends ParserRuleContext {
	public kwDurableWrites(): KwDurableWritesContext {
		return this.getRuleContext(0, KwDurableWritesContext);
	}
	public OPERATOR_EQ(): TerminalNode { return this.getToken(CqlParser.OPERATOR_EQ, 0); }
	public literalBoolean(): LiteralBooleanContext {
		return this.getRuleContext(0, LiteralBooleanContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_durableWrites; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDurableWrites) listener.enterDurableWrites(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDurableWrites) listener.exitDurableWrites(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDurableWrites) return visitor.visitDurableWrites(this);
		else return visitor.visitChildren(this);
	}
}


export class UseContext extends ParserRuleContext {
	public kwUse(): KwUseContext {
		return this.getRuleContext(0, KwUseContext);
	}
	public keyspace(): KeyspaceContext {
		return this.getRuleContext(0, KeyspaceContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_use; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterUse) listener.enterUse(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitUse) listener.exitUse(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitUse) return visitor.visitUse(this);
		else return visitor.visitChildren(this);
	}
}


export class TruncateContext extends ParserRuleContext {
	public kwTruncate(): KwTruncateContext {
		return this.getRuleContext(0, KwTruncateContext);
	}
	public table(): TableContext {
		return this.getRuleContext(0, TableContext);
	}
	public kwTable(): KwTableContext | undefined {
		return this.tryGetRuleContext(0, KwTableContext);
	}
	public keyspace(): KeyspaceContext | undefined {
		return this.tryGetRuleContext(0, KeyspaceContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CqlParser.DOT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_truncate; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterTruncate) listener.enterTruncate(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitTruncate) listener.exitTruncate(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitTruncate) return visitor.visitTruncate(this);
		else return visitor.visitChildren(this);
	}
}


export class CreateIndexContext extends ParserRuleContext {
	public kwCreate(): KwCreateContext {
		return this.getRuleContext(0, KwCreateContext);
	}
	public kwIndex(): KwIndexContext {
		return this.getRuleContext(0, KwIndexContext);
	}
	public kwOn(): KwOnContext {
		return this.getRuleContext(0, KwOnContext);
	}
	public table(): TableContext {
		return this.getRuleContext(0, TableContext);
	}
	public syntaxBracketLr(): SyntaxBracketLrContext {
		return this.getRuleContext(0, SyntaxBracketLrContext);
	}
	public indexColumnSpec(): IndexColumnSpecContext {
		return this.getRuleContext(0, IndexColumnSpecContext);
	}
	public syntaxBracketRr(): SyntaxBracketRrContext {
		return this.getRuleContext(0, SyntaxBracketRrContext);
	}
	public ifNotExist(): IfNotExistContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistContext);
	}
	public indexName(): IndexNameContext | undefined {
		return this.tryGetRuleContext(0, IndexNameContext);
	}
	public keyspace(): KeyspaceContext | undefined {
		return this.tryGetRuleContext(0, KeyspaceContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CqlParser.DOT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_createIndex; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterCreateIndex) listener.enterCreateIndex(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitCreateIndex) listener.exitCreateIndex(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitCreateIndex) return visitor.visitCreateIndex(this);
		else return visitor.visitChildren(this);
	}
}


export class IndexNameContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode | undefined { return this.tryGetToken(CqlParser.OBJECT_NAME, 0); }
	public literalString(): LiteralStringContext | undefined {
		return this.tryGetRuleContext(0, LiteralStringContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_indexName; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterIndexName) listener.enterIndexName(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitIndexName) listener.exitIndexName(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitIndexName) return visitor.visitIndexName(this);
		else return visitor.visitChildren(this);
	}
}


export class IndexColumnSpecContext extends ParserRuleContext {
	public column(): ColumnContext | undefined {
		return this.tryGetRuleContext(0, ColumnContext);
	}
	public indexKeysSpec(): IndexKeysSpecContext | undefined {
		return this.tryGetRuleContext(0, IndexKeysSpecContext);
	}
	public indexEntriesSSpec(): IndexEntriesSSpecContext | undefined {
		return this.tryGetRuleContext(0, IndexEntriesSSpecContext);
	}
	public indexFullSpec(): IndexFullSpecContext | undefined {
		return this.tryGetRuleContext(0, IndexFullSpecContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_indexColumnSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterIndexColumnSpec) listener.enterIndexColumnSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitIndexColumnSpec) listener.exitIndexColumnSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitIndexColumnSpec) return visitor.visitIndexColumnSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class IndexKeysSpecContext extends ParserRuleContext {
	public kwKeys(): KwKeysContext {
		return this.getRuleContext(0, KwKeysContext);
	}
	public syntaxBracketLr(): SyntaxBracketLrContext {
		return this.getRuleContext(0, SyntaxBracketLrContext);
	}
	public OBJECT_NAME(): TerminalNode { return this.getToken(CqlParser.OBJECT_NAME, 0); }
	public syntaxBracketRr(): SyntaxBracketRrContext {
		return this.getRuleContext(0, SyntaxBracketRrContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_indexKeysSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterIndexKeysSpec) listener.enterIndexKeysSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitIndexKeysSpec) listener.exitIndexKeysSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitIndexKeysSpec) return visitor.visitIndexKeysSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class IndexEntriesSSpecContext extends ParserRuleContext {
	public kwEntries(): KwEntriesContext {
		return this.getRuleContext(0, KwEntriesContext);
	}
	public syntaxBracketLr(): SyntaxBracketLrContext {
		return this.getRuleContext(0, SyntaxBracketLrContext);
	}
	public OBJECT_NAME(): TerminalNode { return this.getToken(CqlParser.OBJECT_NAME, 0); }
	public syntaxBracketRr(): SyntaxBracketRrContext {
		return this.getRuleContext(0, SyntaxBracketRrContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_indexEntriesSSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterIndexEntriesSSpec) listener.enterIndexEntriesSSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitIndexEntriesSSpec) listener.exitIndexEntriesSSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitIndexEntriesSSpec) return visitor.visitIndexEntriesSSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class IndexFullSpecContext extends ParserRuleContext {
	public kwFull(): KwFullContext {
		return this.getRuleContext(0, KwFullContext);
	}
	public syntaxBracketLr(): SyntaxBracketLrContext {
		return this.getRuleContext(0, SyntaxBracketLrContext);
	}
	public OBJECT_NAME(): TerminalNode { return this.getToken(CqlParser.OBJECT_NAME, 0); }
	public syntaxBracketRr(): SyntaxBracketRrContext {
		return this.getRuleContext(0, SyntaxBracketRrContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_indexFullSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterIndexFullSpec) listener.enterIndexFullSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitIndexFullSpec) listener.exitIndexFullSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitIndexFullSpec) return visitor.visitIndexFullSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class DeleteContext extends ParserRuleContext {
	public kwDelete(): KwDeleteContext {
		return this.getRuleContext(0, KwDeleteContext);
	}
	public fromSpec(): FromSpecContext {
		return this.getRuleContext(0, FromSpecContext);
	}
	public whereSpec(): WhereSpecContext {
		return this.getRuleContext(0, WhereSpecContext);
	}
	public beginBatch(): BeginBatchContext | undefined {
		return this.tryGetRuleContext(0, BeginBatchContext);
	}
	public deleteColumnList(): DeleteColumnListContext | undefined {
		return this.tryGetRuleContext(0, DeleteColumnListContext);
	}
	public usingTimestampSpec(): UsingTimestampSpecContext | undefined {
		return this.tryGetRuleContext(0, UsingTimestampSpecContext);
	}
	public ifExist(): IfExistContext | undefined {
		return this.tryGetRuleContext(0, IfExistContext);
	}
	public ifSpec(): IfSpecContext | undefined {
		return this.tryGetRuleContext(0, IfSpecContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_delete; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDelete) listener.enterDelete(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDelete) listener.exitDelete(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDelete) return visitor.visitDelete(this);
		else return visitor.visitChildren(this);
	}
}


export class DeleteColumnListContext extends ParserRuleContext {
	public deleteColumnItem(): DeleteColumnItemContext[];
	public deleteColumnItem(i: number): DeleteColumnItemContext;
	public deleteColumnItem(i?: number): DeleteColumnItemContext | DeleteColumnItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeleteColumnItemContext);
		} else {
			return this.getRuleContext(i, DeleteColumnItemContext);
		}
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_deleteColumnList; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDeleteColumnList) listener.enterDeleteColumnList(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDeleteColumnList) listener.exitDeleteColumnList(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDeleteColumnList) return visitor.visitDeleteColumnList(this);
		else return visitor.visitChildren(this);
	}
}


export class DeleteColumnItemContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode { return this.getToken(CqlParser.OBJECT_NAME, 0); }
	public LS_BRACKET(): TerminalNode | undefined { return this.tryGetToken(CqlParser.LS_BRACKET, 0); }
	public RS_BRACKET(): TerminalNode | undefined { return this.tryGetToken(CqlParser.RS_BRACKET, 0); }
	public literalString(): LiteralStringContext | undefined {
		return this.tryGetRuleContext(0, LiteralStringContext);
	}
	public literalDecimal(): LiteralDecimalContext | undefined {
		return this.tryGetRuleContext(0, LiteralDecimalContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_deleteColumnItem; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDeleteColumnItem) listener.enterDeleteColumnItem(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDeleteColumnItem) listener.exitDeleteColumnItem(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDeleteColumnItem) return visitor.visitDeleteColumnItem(this);
		else return visitor.visitChildren(this);
	}
}


export class UpdateContext extends ParserRuleContext {
	public kwUpdate(): KwUpdateContext {
		return this.getRuleContext(0, KwUpdateContext);
	}
	public table(): TableContext {
		return this.getRuleContext(0, TableContext);
	}
	public kwSet(): KwSetContext {
		return this.getRuleContext(0, KwSetContext);
	}
	public assignments(): AssignmentsContext {
		return this.getRuleContext(0, AssignmentsContext);
	}
	public whereSpec(): WhereSpecContext {
		return this.getRuleContext(0, WhereSpecContext);
	}
	public beginBatch(): BeginBatchContext | undefined {
		return this.tryGetRuleContext(0, BeginBatchContext);
	}
	public keyspace(): KeyspaceContext | undefined {
		return this.tryGetRuleContext(0, KeyspaceContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CqlParser.DOT, 0); }
	public usingTtlTimestamp(): UsingTtlTimestampContext | undefined {
		return this.tryGetRuleContext(0, UsingTtlTimestampContext);
	}
	public ifExist(): IfExistContext | undefined {
		return this.tryGetRuleContext(0, IfExistContext);
	}
	public ifSpec(): IfSpecContext | undefined {
		return this.tryGetRuleContext(0, IfSpecContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_update; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterUpdate) listener.enterUpdate(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitUpdate) listener.exitUpdate(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitUpdate) return visitor.visitUpdate(this);
		else return visitor.visitChildren(this);
	}
}


export class IfSpecContext extends ParserRuleContext {
	public kwIf(): KwIfContext {
		return this.getRuleContext(0, KwIfContext);
	}
	public ifConditionList(): IfConditionListContext {
		return this.getRuleContext(0, IfConditionListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_ifSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterIfSpec) listener.enterIfSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitIfSpec) listener.exitIfSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitIfSpec) return visitor.visitIfSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class IfConditionListContext extends ParserRuleContext {
	public ifCondition(): IfConditionContext[];
	public ifCondition(i: number): IfConditionContext;
	public ifCondition(i?: number): IfConditionContext | IfConditionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IfConditionContext);
		} else {
			return this.getRuleContext(i, IfConditionContext);
		}
	}
	public kwAnd(): KwAndContext[];
	public kwAnd(i: number): KwAndContext;
	public kwAnd(i?: number): KwAndContext | KwAndContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KwAndContext);
		} else {
			return this.getRuleContext(i, KwAndContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_ifConditionList; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterIfConditionList) listener.enterIfConditionList(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitIfConditionList) listener.exitIfConditionList(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitIfConditionList) return visitor.visitIfConditionList(this);
		else return visitor.visitChildren(this);
	}
}


export class IfConditionContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode { return this.getToken(CqlParser.OBJECT_NAME, 0); }
	public OPERATOR_EQ(): TerminalNode { return this.getToken(CqlParser.OPERATOR_EQ, 0); }
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_ifCondition; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterIfCondition) listener.enterIfCondition(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitIfCondition) listener.exitIfCondition(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitIfCondition) return visitor.visitIfCondition(this);
		else return visitor.visitChildren(this);
	}
}


export class AssignmentsContext extends ParserRuleContext {
	public assignmentElement(): AssignmentElementContext[];
	public assignmentElement(i: number): AssignmentElementContext;
	public assignmentElement(i?: number): AssignmentElementContext | AssignmentElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignmentElementContext);
		} else {
			return this.getRuleContext(i, AssignmentElementContext);
		}
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_assignments; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAssignments) listener.enterAssignments(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAssignments) listener.exitAssignments(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAssignments) return visitor.visitAssignments(this);
		else return visitor.visitChildren(this);
	}
}


export class AssignmentElementContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode[];
	public OBJECT_NAME(i: number): TerminalNode;
	public OBJECT_NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CqlParser.OBJECT_NAME);
		} else {
			return this.getToken(CqlParser.OBJECT_NAME, i);
		}
	}
	public OPERATOR_EQ(): TerminalNode { return this.getToken(CqlParser.OPERATOR_EQ, 0); }
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	public assignmentMap(): AssignmentMapContext | undefined {
		return this.tryGetRuleContext(0, AssignmentMapContext);
	}
	public assignmentSet(): AssignmentSetContext | undefined {
		return this.tryGetRuleContext(0, AssignmentSetContext);
	}
	public assignmentList(): AssignmentListContext | undefined {
		return this.tryGetRuleContext(0, AssignmentListContext);
	}
	public literalDecimal(): LiteralDecimalContext | undefined {
		return this.tryGetRuleContext(0, LiteralDecimalContext);
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(CqlParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(CqlParser.MINUS, 0); }
	public syntaxBracketLs(): SyntaxBracketLsContext | undefined {
		return this.tryGetRuleContext(0, SyntaxBracketLsContext);
	}
	public syntaxBracketRs(): SyntaxBracketRsContext | undefined {
		return this.tryGetRuleContext(0, SyntaxBracketRsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_assignmentElement; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAssignmentElement) listener.enterAssignmentElement(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAssignmentElement) listener.exitAssignmentElement(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAssignmentElement) return visitor.visitAssignmentElement(this);
		else return visitor.visitChildren(this);
	}
}


export class AssignmentSetContext extends ParserRuleContext {
	public syntaxBracketLc(): SyntaxBracketLcContext {
		return this.getRuleContext(0, SyntaxBracketLcContext);
	}
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	public syntaxBracketRc(): SyntaxBracketRcContext {
		return this.getRuleContext(0, SyntaxBracketRcContext);
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_assignmentSet; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAssignmentSet) listener.enterAssignmentSet(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAssignmentSet) listener.exitAssignmentSet(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAssignmentSet) return visitor.visitAssignmentSet(this);
		else return visitor.visitChildren(this);
	}
}


export class AssignmentMapContext extends ParserRuleContext {
	public syntaxBracketLc(): SyntaxBracketLcContext {
		return this.getRuleContext(0, SyntaxBracketLcContext);
	}
	public syntaxBracketRc(): SyntaxBracketRcContext {
		return this.getRuleContext(0, SyntaxBracketRcContext);
	}
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	public syntaxColon(): SyntaxColonContext[];
	public syntaxColon(i: number): SyntaxColonContext;
	public syntaxColon(i?: number): SyntaxColonContext | SyntaxColonContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxColonContext);
		} else {
			return this.getRuleContext(i, SyntaxColonContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_assignmentMap; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAssignmentMap) listener.enterAssignmentMap(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAssignmentMap) listener.exitAssignmentMap(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAssignmentMap) return visitor.visitAssignmentMap(this);
		else return visitor.visitChildren(this);
	}
}


export class AssignmentListContext extends ParserRuleContext {
	public syntaxBracketLs(): SyntaxBracketLsContext {
		return this.getRuleContext(0, SyntaxBracketLsContext);
	}
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	public syntaxBracketRs(): SyntaxBracketRsContext {
		return this.getRuleContext(0, SyntaxBracketRsContext);
	}
	public syntaxColon(): SyntaxColonContext[];
	public syntaxColon(i: number): SyntaxColonContext;
	public syntaxColon(i?: number): SyntaxColonContext | SyntaxColonContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxColonContext);
		} else {
			return this.getRuleContext(i, SyntaxColonContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_assignmentList; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAssignmentList) listener.enterAssignmentList(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAssignmentList) listener.exitAssignmentList(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAssignmentList) return visitor.visitAssignmentList(this);
		else return visitor.visitChildren(this);
	}
}


export class InsertContext extends ParserRuleContext {
	public kwInsert(): KwInsertContext {
		return this.getRuleContext(0, KwInsertContext);
	}
	public kwInto(): KwIntoContext {
		return this.getRuleContext(0, KwIntoContext);
	}
	public table(): TableContext {
		return this.getRuleContext(0, TableContext);
	}
	public insertColumnSpec(): InsertColumnSpecContext {
		return this.getRuleContext(0, InsertColumnSpecContext);
	}
	public insertValuesSpec(): InsertValuesSpecContext {
		return this.getRuleContext(0, InsertValuesSpecContext);
	}
	public beginBatch(): BeginBatchContext | undefined {
		return this.tryGetRuleContext(0, BeginBatchContext);
	}
	public keyspace(): KeyspaceContext | undefined {
		return this.tryGetRuleContext(0, KeyspaceContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CqlParser.DOT, 0); }
	public ifNotExist(): IfNotExistContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistContext);
	}
	public usingTtlTimestamp(): UsingTtlTimestampContext | undefined {
		return this.tryGetRuleContext(0, UsingTtlTimestampContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_insert; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterInsert) listener.enterInsert(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitInsert) listener.exitInsert(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitInsert) return visitor.visitInsert(this);
		else return visitor.visitChildren(this);
	}
}


export class UsingTtlTimestampContext extends ParserRuleContext {
	public kwUsing(): KwUsingContext {
		return this.getRuleContext(0, KwUsingContext);
	}
	public ttl(): TtlContext | undefined {
		return this.tryGetRuleContext(0, TtlContext);
	}
	public kwAnd(): KwAndContext | undefined {
		return this.tryGetRuleContext(0, KwAndContext);
	}
	public timestamp(): TimestampContext | undefined {
		return this.tryGetRuleContext(0, TimestampContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_usingTtlTimestamp; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterUsingTtlTimestamp) listener.enterUsingTtlTimestamp(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitUsingTtlTimestamp) listener.exitUsingTtlTimestamp(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitUsingTtlTimestamp) return visitor.visitUsingTtlTimestamp(this);
		else return visitor.visitChildren(this);
	}
}


export class TimestampContext extends ParserRuleContext {
	public kwTimestamp(): KwTimestampContext {
		return this.getRuleContext(0, KwTimestampContext);
	}
	public literalDecimal(): LiteralDecimalContext {
		return this.getRuleContext(0, LiteralDecimalContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_timestamp; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterTimestamp) listener.enterTimestamp(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitTimestamp) listener.exitTimestamp(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitTimestamp) return visitor.visitTimestamp(this);
		else return visitor.visitChildren(this);
	}
}


export class TtlContext extends ParserRuleContext {
	public kwTtl(): KwTtlContext {
		return this.getRuleContext(0, KwTtlContext);
	}
	public literalDecimal(): LiteralDecimalContext {
		return this.getRuleContext(0, LiteralDecimalContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_ttl; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterTtl) listener.enterTtl(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitTtl) listener.exitTtl(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitTtl) return visitor.visitTtl(this);
		else return visitor.visitChildren(this);
	}
}


export class UsingTimestampSpecContext extends ParserRuleContext {
	public kwUsing(): KwUsingContext {
		return this.getRuleContext(0, KwUsingContext);
	}
	public timestamp(): TimestampContext {
		return this.getRuleContext(0, TimestampContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_usingTimestampSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterUsingTimestampSpec) listener.enterUsingTimestampSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitUsingTimestampSpec) listener.exitUsingTimestampSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitUsingTimestampSpec) return visitor.visitUsingTimestampSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class IfNotExistContext extends ParserRuleContext {
	public kwIf(): KwIfContext {
		return this.getRuleContext(0, KwIfContext);
	}
	public kwNot(): KwNotContext {
		return this.getRuleContext(0, KwNotContext);
	}
	public kwExists(): KwExistsContext {
		return this.getRuleContext(0, KwExistsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_ifNotExist; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterIfNotExist) listener.enterIfNotExist(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitIfNotExist) listener.exitIfNotExist(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitIfNotExist) return visitor.visitIfNotExist(this);
		else return visitor.visitChildren(this);
	}
}


export class IfExistContext extends ParserRuleContext {
	public kwIf(): KwIfContext {
		return this.getRuleContext(0, KwIfContext);
	}
	public kwExists(): KwExistsContext {
		return this.getRuleContext(0, KwExistsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_ifExist; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterIfExist) listener.enterIfExist(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitIfExist) listener.exitIfExist(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitIfExist) return visitor.visitIfExist(this);
		else return visitor.visitChildren(this);
	}
}


export class InsertValuesSpecContext extends ParserRuleContext {
	public kwValues(): KwValuesContext {
		return this.getRuleContext(0, KwValuesContext);
	}
	public expressionList(): ExpressionListContext {
		return this.getRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_insertValuesSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterInsertValuesSpec) listener.enterInsertValuesSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitInsertValuesSpec) listener.exitInsertValuesSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitInsertValuesSpec) return visitor.visitInsertValuesSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class InsertColumnSpecContext extends ParserRuleContext {
	public columnList(): ColumnListContext {
		return this.getRuleContext(0, ColumnListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_insertColumnSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterInsertColumnSpec) listener.enterInsertColumnSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitInsertColumnSpec) listener.exitInsertColumnSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitInsertColumnSpec) return visitor.visitInsertColumnSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class ColumnListContext extends ParserRuleContext {
	public column(): ColumnContext[];
	public column(i: number): ColumnContext;
	public column(i?: number): ColumnContext | ColumnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnContext);
		} else {
			return this.getRuleContext(i, ColumnContext);
		}
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_columnList; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterColumnList) listener.enterColumnList(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitColumnList) listener.exitColumnList(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitColumnList) return visitor.visitColumnList(this);
		else return visitor.visitChildren(this);
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	public assignmentMap(): AssignmentMapContext[];
	public assignmentMap(i: number): AssignmentMapContext;
	public assignmentMap(i?: number): AssignmentMapContext | AssignmentMapContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignmentMapContext);
		} else {
			return this.getRuleContext(i, AssignmentMapContext);
		}
	}
	public assignmentSet(): AssignmentSetContext[];
	public assignmentSet(i: number): AssignmentSetContext;
	public assignmentSet(i?: number): AssignmentSetContext | AssignmentSetContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignmentSetContext);
		} else {
			return this.getRuleContext(i, AssignmentSetContext);
		}
	}
	public assignmentList(): AssignmentListContext[];
	public assignmentList(i: number): AssignmentListContext;
	public assignmentList(i?: number): AssignmentListContext | AssignmentListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignmentListContext);
		} else {
			return this.getRuleContext(i, AssignmentListContext);
		}
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_expressionList; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterExpressionList) listener.enterExpressionList(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitExpressionList) listener.exitExpressionList(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitExpressionList) return visitor.visitExpressionList(this);
		else return visitor.visitChildren(this);
	}
}


export class SelectContext extends ParserRuleContext {
	public kwSelect(): KwSelectContext {
		return this.getRuleContext(0, KwSelectContext);
	}
	public selectElements(): SelectElementsContext {
		return this.getRuleContext(0, SelectElementsContext);
	}
	public fromSpec(): FromSpecContext {
		return this.getRuleContext(0, FromSpecContext);
	}
	public kwDistinct(): KwDistinctContext | undefined {
		return this.tryGetRuleContext(0, KwDistinctContext);
	}
	public whereSpec(): WhereSpecContext | undefined {
		return this.tryGetRuleContext(0, WhereSpecContext);
	}
	public orderSpec(): OrderSpecContext | undefined {
		return this.tryGetRuleContext(0, OrderSpecContext);
	}
	public limitSpec(): LimitSpecContext | undefined {
		return this.tryGetRuleContext(0, LimitSpecContext);
	}
	public kwAllowFiltering(): KwAllowFilteringContext | undefined {
		return this.tryGetRuleContext(0, KwAllowFilteringContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_select; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSelect) listener.enterSelect(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSelect) listener.exitSelect(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSelect) return visitor.visitSelect(this);
		else return visitor.visitChildren(this);
	}
}


export class LimitSpecContext extends ParserRuleContext {
	public kwLimit(): KwLimitContext {
		return this.getRuleContext(0, KwLimitContext);
	}
	public literalDecimal(): LiteralDecimalContext {
		return this.getRuleContext(0, LiteralDecimalContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_limitSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterLimitSpec) listener.enterLimitSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitLimitSpec) listener.exitLimitSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitLimitSpec) return visitor.visitLimitSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class FromSpecContext extends ParserRuleContext {
	public kwFrom(): KwFromContext {
		return this.getRuleContext(0, KwFromContext);
	}
	public fromSpecElement(): FromSpecElementContext {
		return this.getRuleContext(0, FromSpecElementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_fromSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterFromSpec) listener.enterFromSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitFromSpec) listener.exitFromSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitFromSpec) return visitor.visitFromSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class FromSpecElementContext extends ParserRuleContext {
	public table(): TableContext {
		return this.getRuleContext(0, TableContext);
	}
	public keyspace(): KeyspaceContext | undefined {
		return this.tryGetRuleContext(0, KeyspaceContext);
	}
	public specialDot(): SpecialDotContext | undefined {
		return this.tryGetRuleContext(0, SpecialDotContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_fromSpecElement; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterFromSpecElement) listener.enterFromSpecElement(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitFromSpecElement) listener.exitFromSpecElement(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitFromSpecElement) return visitor.visitFromSpecElement(this);
		else return visitor.visitChildren(this);
	}
}


export class OrderSpecContext extends ParserRuleContext {
	public kwOrderBy(): KwOrderByContext {
		return this.getRuleContext(0, KwOrderByContext);
	}
	public orderSpecElement(): OrderSpecElementContext {
		return this.getRuleContext(0, OrderSpecElementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_orderSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterOrderSpec) listener.enterOrderSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitOrderSpec) listener.exitOrderSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitOrderSpec) return visitor.visitOrderSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class OrderSpecElementContext extends ParserRuleContext {
	public column(): ColumnContext {
		return this.getRuleContext(0, ColumnContext);
	}
	public kwAsc(): KwAscContext | undefined {
		return this.tryGetRuleContext(0, KwAscContext);
	}
	public kwDesc(): KwDescContext | undefined {
		return this.tryGetRuleContext(0, KwDescContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_orderSpecElement; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterOrderSpecElement) listener.enterOrderSpecElement(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitOrderSpecElement) listener.exitOrderSpecElement(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitOrderSpecElement) return visitor.visitOrderSpecElement(this);
		else return visitor.visitChildren(this);
	}
}


export class WhereSpecContext extends ParserRuleContext {
	public kwWhere(): KwWhereContext {
		return this.getRuleContext(0, KwWhereContext);
	}
	public relationElements(): RelationElementsContext {
		return this.getRuleContext(0, RelationElementsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_whereSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterWhereSpec) listener.enterWhereSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitWhereSpec) listener.exitWhereSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitWhereSpec) return visitor.visitWhereSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class SelectElementsContext extends ParserRuleContext {
	public specialStar(): SpecialStarContext | undefined {
		return this.tryGetRuleContext(0, SpecialStarContext);
	}
	public selectElement(): SelectElementContext[];
	public selectElement(i: number): SelectElementContext;
	public selectElement(i?: number): SelectElementContext | SelectElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SelectElementContext);
		} else {
			return this.getRuleContext(i, SelectElementContext);
		}
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_selectElements; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSelectElements) listener.enterSelectElements(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSelectElements) listener.exitSelectElements(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSelectElements) return visitor.visitSelectElements(this);
		else return visitor.visitChildren(this);
	}
}


export class SelectElementContext extends ParserRuleContext {
	public column(): ColumnContext | undefined {
		return this.tryGetRuleContext(0, ColumnContext);
	}
	public kwAs(): KwAsContext | undefined {
		return this.tryGetRuleContext(0, KwAsContext);
	}
	public OBJECT_NAME(): TerminalNode | undefined { return this.tryGetToken(CqlParser.OBJECT_NAME, 0); }
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_selectElement; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSelectElement) listener.enterSelectElement(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSelectElement) listener.exitSelectElement(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSelectElement) return visitor.visitSelectElement(this);
		else return visitor.visitChildren(this);
	}
}


export class RelationElementsContext extends ParserRuleContext {
	public relationElement(): RelationElementContext[];
	public relationElement(i: number): RelationElementContext;
	public relationElement(i?: number): RelationElementContext | RelationElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationElementContext);
		} else {
			return this.getRuleContext(i, RelationElementContext);
		}
	}
	public kwAnd(): KwAndContext[];
	public kwAnd(i: number): KwAndContext;
	public kwAnd(i?: number): KwAndContext | KwAndContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KwAndContext);
		} else {
			return this.getRuleContext(i, KwAndContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_relationElements; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterRelationElements) listener.enterRelationElements(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitRelationElements) listener.exitRelationElements(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitRelationElements) return visitor.visitRelationElements(this);
		else return visitor.visitChildren(this);
	}
}


export class RelationElementContext extends ParserRuleContext {
	public column(): ColumnContext | undefined {
		return this.tryGetRuleContext(0, ColumnContext);
	}
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	public syntaxOperatorEq(): SyntaxOperatorEqContext | undefined {
		return this.tryGetRuleContext(0, SyntaxOperatorEqContext);
	}
	public syntaxOperatorLt(): SyntaxOperatorLtContext | undefined {
		return this.tryGetRuleContext(0, SyntaxOperatorLtContext);
	}
	public syntaxOperatorGt(): SyntaxOperatorGtContext | undefined {
		return this.tryGetRuleContext(0, SyntaxOperatorGtContext);
	}
	public syntaxOperatorLte(): SyntaxOperatorLteContext | undefined {
		return this.tryGetRuleContext(0, SyntaxOperatorLteContext);
	}
	public syntaxOperatorGte(): SyntaxOperatorGteContext | undefined {
		return this.tryGetRuleContext(0, SyntaxOperatorGteContext);
	}
	public functionCall(): FunctionCallContext[];
	public functionCall(i: number): FunctionCallContext;
	public functionCall(i?: number): FunctionCallContext | FunctionCallContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionCallContext);
		} else {
			return this.getRuleContext(i, FunctionCallContext);
		}
	}
	public kwIn(): KwInContext | undefined {
		return this.tryGetRuleContext(0, KwInContext);
	}
	public syntaxBracketLr(): SyntaxBracketLrContext | undefined {
		return this.tryGetRuleContext(0, SyntaxBracketLrContext);
	}
	public syntaxBracketRr(): SyntaxBracketRrContext | undefined {
		return this.tryGetRuleContext(0, SyntaxBracketRrContext);
	}
	public functionArgs(): FunctionArgsContext | undefined {
		return this.tryGetRuleContext(0, FunctionArgsContext);
	}
	public relalationContainsKey(): RelalationContainsKeyContext | undefined {
		return this.tryGetRuleContext(0, RelalationContainsKeyContext);
	}
	public relalationContains(): RelalationContainsContext | undefined {
		return this.tryGetRuleContext(0, RelalationContainsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_relationElement; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterRelationElement) listener.enterRelationElement(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitRelationElement) listener.exitRelationElement(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitRelationElement) return visitor.visitRelationElement(this);
		else return visitor.visitChildren(this);
	}
}


export class RelalationContainsContext extends ParserRuleContext {
	public column(): ColumnContext {
		return this.getRuleContext(0, ColumnContext);
	}
	public kwContains(): KwContainsContext {
		return this.getRuleContext(0, KwContainsContext);
	}
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_relalationContains; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterRelalationContains) listener.enterRelalationContains(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitRelalationContains) listener.exitRelalationContains(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitRelalationContains) return visitor.visitRelalationContains(this);
		else return visitor.visitChildren(this);
	}
}


export class RelalationContainsKeyContext extends ParserRuleContext {
	public column(): ColumnContext {
		return this.getRuleContext(0, ColumnContext);
	}
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}
	public kwContainsKey(): KwContainsKeyContext | undefined {
		return this.tryGetRuleContext(0, KwContainsKeyContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_relalationContainsKey; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterRelalationContainsKey) listener.enterRelalationContainsKey(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitRelalationContainsKey) listener.exitRelalationContainsKey(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitRelalationContainsKey) return visitor.visitRelalationContainsKey(this);
		else return visitor.visitChildren(this);
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode { return this.getToken(CqlParser.OBJECT_NAME, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(CqlParser.STAR, 0); }
	public functionArgs(): FunctionArgsContext | undefined {
		return this.tryGetRuleContext(0, FunctionArgsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_functionCall; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterFunctionCall) listener.enterFunctionCall(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitFunctionCall) listener.exitFunctionCall(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitFunctionCall) return visitor.visitFunctionCall(this);
		else return visitor.visitChildren(this);
	}
}


export class FunctionArgsContext extends ParserRuleContext {
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	public OBJECT_NAME(): TerminalNode[];
	public OBJECT_NAME(i: number): TerminalNode;
	public OBJECT_NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CqlParser.OBJECT_NAME);
		} else {
			return this.getToken(CqlParser.OBJECT_NAME, i);
		}
	}
	public functionCall(): FunctionCallContext[];
	public functionCall(i: number): FunctionCallContext;
	public functionCall(i?: number): FunctionCallContext | FunctionCallContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionCallContext);
		} else {
			return this.getRuleContext(i, FunctionCallContext);
		}
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_functionArgs; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterFunctionArgs) listener.enterFunctionArgs(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitFunctionArgs) listener.exitFunctionArgs(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitFunctionArgs) return visitor.visitFunctionArgs(this);
		else return visitor.visitChildren(this);
	}
}


export class ConstantContext extends ParserRuleContext {
	public literalUuid(): LiteralUuidContext | undefined {
		return this.tryGetRuleContext(0, LiteralUuidContext);
	}
	public literalString(): LiteralStringContext | undefined {
		return this.tryGetRuleContext(0, LiteralStringContext);
	}
	public literalDecimal(): LiteralDecimalContext | undefined {
		return this.tryGetRuleContext(0, LiteralDecimalContext);
	}
	public literalHexadecimal(): LiteralHexadecimalContext | undefined {
		return this.tryGetRuleContext(0, LiteralHexadecimalContext);
	}
	public literalBoolean(): LiteralBooleanContext | undefined {
		return this.tryGetRuleContext(0, LiteralBooleanContext);
	}
	public kwNull(): KwNullContext | undefined {
		return this.tryGetRuleContext(0, KwNullContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_constant; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterConstant) listener.enterConstant(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitConstant) listener.exitConstant(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitConstant) return visitor.visitConstant(this);
		else return visitor.visitChildren(this);
	}
}


export class LiteralUuidContext extends ParserRuleContext {
	public UUID(): TerminalNode { return this.getToken(CqlParser.UUID, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_literalUuid; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterLiteralUuid) listener.enterLiteralUuid(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitLiteralUuid) listener.exitLiteralUuid(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitLiteralUuid) return visitor.visitLiteralUuid(this);
		else return visitor.visitChildren(this);
	}
}


export class LiteralDecimalContext extends ParserRuleContext {
	public DECIMAL_LITERAL(): TerminalNode { return this.getToken(CqlParser.DECIMAL_LITERAL, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_literalDecimal; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterLiteralDecimal) listener.enterLiteralDecimal(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitLiteralDecimal) listener.exitLiteralDecimal(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitLiteralDecimal) return visitor.visitLiteralDecimal(this);
		else return visitor.visitChildren(this);
	}
}


export class LiteralFloatContext extends ParserRuleContext {
	public DECIMAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(CqlParser.DECIMAL_LITERAL, 0); }
	public FLOAT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(CqlParser.FLOAT_LITERAL, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_literalFloat; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterLiteralFloat) listener.enterLiteralFloat(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitLiteralFloat) listener.exitLiteralFloat(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitLiteralFloat) return visitor.visitLiteralFloat(this);
		else return visitor.visitChildren(this);
	}
}


export class LiteralStringContext extends ParserRuleContext {
	public STRING_LITERAL(): TerminalNode { return this.getToken(CqlParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_literalString; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterLiteralString) listener.enterLiteralString(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitLiteralString) listener.exitLiteralString(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitLiteralString) return visitor.visitLiteralString(this);
		else return visitor.visitChildren(this);
	}
}


export class LiteralBooleanContext extends ParserRuleContext {
	public K_TRUE(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_TRUE, 0); }
	public K_FALSE(): TerminalNode | undefined { return this.tryGetToken(CqlParser.K_FALSE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_literalBoolean; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterLiteralBoolean) listener.enterLiteralBoolean(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitLiteralBoolean) listener.exitLiteralBoolean(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitLiteralBoolean) return visitor.visitLiteralBoolean(this);
		else return visitor.visitChildren(this);
	}
}


export class LiteralHexadecimalContext extends ParserRuleContext {
	public HEXADECIMAL_LITERAL(): TerminalNode { return this.getToken(CqlParser.HEXADECIMAL_LITERAL, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_literalHexadecimal; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterLiteralHexadecimal) listener.enterLiteralHexadecimal(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitLiteralHexadecimal) listener.exitLiteralHexadecimal(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitLiteralHexadecimal) return visitor.visitLiteralHexadecimal(this);
		else return visitor.visitChildren(this);
	}
}


export class KeyspaceContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode { return this.getToken(CqlParser.OBJECT_NAME, 0); }
	public DQUOTE(): TerminalNode[];
	public DQUOTE(i: number): TerminalNode;
	public DQUOTE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CqlParser.DQUOTE);
		} else {
			return this.getToken(CqlParser.DQUOTE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_keyspace; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKeyspace) listener.enterKeyspace(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKeyspace) listener.exitKeyspace(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKeyspace) return visitor.visitKeyspace(this);
		else return visitor.visitChildren(this);
	}
}


export class TableContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode { return this.getToken(CqlParser.OBJECT_NAME, 0); }
	public DQUOTE(): TerminalNode[];
	public DQUOTE(i: number): TerminalNode;
	public DQUOTE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CqlParser.DQUOTE);
		} else {
			return this.getToken(CqlParser.DQUOTE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_table; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterTable) listener.enterTable(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitTable) listener.exitTable(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitTable) return visitor.visitTable(this);
		else return visitor.visitChildren(this);
	}
}


export class ColumnContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode { return this.getToken(CqlParser.OBJECT_NAME, 0); }
	public DQUOTE(): TerminalNode[];
	public DQUOTE(i: number): TerminalNode;
	public DQUOTE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CqlParser.DQUOTE);
		} else {
			return this.getToken(CqlParser.DQUOTE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_column; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterColumn) listener.enterColumn(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitColumn) listener.exitColumn(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitColumn) return visitor.visitColumn(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeContext extends ParserRuleContext {
	public dataTypeAscii(): DataTypeAsciiContext | undefined {
		return this.tryGetRuleContext(0, DataTypeAsciiContext);
	}
	public dataTypeBigint(): DataTypeBigintContext | undefined {
		return this.tryGetRuleContext(0, DataTypeBigintContext);
	}
	public dataTypeBlob(): DataTypeBlobContext | undefined {
		return this.tryGetRuleContext(0, DataTypeBlobContext);
	}
	public dataTypeBoolean(): DataTypeBooleanContext | undefined {
		return this.tryGetRuleContext(0, DataTypeBooleanContext);
	}
	public dataTypeCounter(): DataTypeCounterContext | undefined {
		return this.tryGetRuleContext(0, DataTypeCounterContext);
	}
	public dataTypeDate(): DataTypeDateContext | undefined {
		return this.tryGetRuleContext(0, DataTypeDateContext);
	}
	public dataTypeDecimal(): DataTypeDecimalContext | undefined {
		return this.tryGetRuleContext(0, DataTypeDecimalContext);
	}
	public dataTypeDouble(): DataTypeDoubleContext | undefined {
		return this.tryGetRuleContext(0, DataTypeDoubleContext);
	}
	public dataTypeFloat(): DataTypeFloatContext | undefined {
		return this.tryGetRuleContext(0, DataTypeFloatContext);
	}
	public dataTypeFrozen(): DataTypeFrozenContext | undefined {
		return this.tryGetRuleContext(0, DataTypeFrozenContext);
	}
	public dataTypeInet(): DataTypeInetContext | undefined {
		return this.tryGetRuleContext(0, DataTypeInetContext);
	}
	public dataTypeInt(): DataTypeIntContext | undefined {
		return this.tryGetRuleContext(0, DataTypeIntContext);
	}
	public dataTypeList(): DataTypeListContext | undefined {
		return this.tryGetRuleContext(0, DataTypeListContext);
	}
	public dataTypeMap(): DataTypeMapContext | undefined {
		return this.tryGetRuleContext(0, DataTypeMapContext);
	}
	public dataTypeSet(): DataTypeSetContext | undefined {
		return this.tryGetRuleContext(0, DataTypeSetContext);
	}
	public dataTypeSmallInt(): DataTypeSmallIntContext | undefined {
		return this.tryGetRuleContext(0, DataTypeSmallIntContext);
	}
	public dataTypeText(): DataTypeTextContext | undefined {
		return this.tryGetRuleContext(0, DataTypeTextContext);
	}
	public dataTypeTime(): DataTypeTimeContext | undefined {
		return this.tryGetRuleContext(0, DataTypeTimeContext);
	}
	public dataTypeTimeUuid(): DataTypeTimeUuidContext | undefined {
		return this.tryGetRuleContext(0, DataTypeTimeUuidContext);
	}
	public dataTypeTimestamp(): DataTypeTimestampContext | undefined {
		return this.tryGetRuleContext(0, DataTypeTimestampContext);
	}
	public dataTypeTinyInt(): DataTypeTinyIntContext | undefined {
		return this.tryGetRuleContext(0, DataTypeTinyIntContext);
	}
	public dataTypeTuple(): DataTypeTupleContext | undefined {
		return this.tryGetRuleContext(0, DataTypeTupleContext);
	}
	public dataTypeUserDefined(): DataTypeUserDefinedContext | undefined {
		return this.tryGetRuleContext(0, DataTypeUserDefinedContext);
	}
	public dataTypeUuid(): DataTypeUuidContext | undefined {
		return this.tryGetRuleContext(0, DataTypeUuidContext);
	}
	public dataTypeVarChar(): DataTypeVarCharContext | undefined {
		return this.tryGetRuleContext(0, DataTypeVarCharContext);
	}
	public dataTypeVarInt(): DataTypeVarIntContext | undefined {
		return this.tryGetRuleContext(0, DataTypeVarIntContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataType; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataType) listener.enterDataType(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataType) listener.exitDataType(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataType) return visitor.visitDataType(this);
		else return visitor.visitChildren(this);
	}
}


export class OrderDirectionContext extends ParserRuleContext {
	public kwAsc(): KwAscContext | undefined {
		return this.tryGetRuleContext(0, KwAscContext);
	}
	public kwDesc(): KwDescContext | undefined {
		return this.tryGetRuleContext(0, KwDescContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_orderDirection; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterOrderDirection) listener.enterOrderDirection(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitOrderDirection) listener.exitOrderDirection(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitOrderDirection) return visitor.visitOrderDirection(this);
		else return visitor.visitChildren(this);
	}
}


export class RoleContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode { return this.getToken(CqlParser.OBJECT_NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_role; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterRole) listener.enterRole(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitRole) listener.exitRole(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitRole) return visitor.visitRole(this);
		else return visitor.visitChildren(this);
	}
}


export class TriggerContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode { return this.getToken(CqlParser.OBJECT_NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_trigger; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterTrigger) listener.enterTrigger(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitTrigger) listener.exitTrigger(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitTrigger) return visitor.visitTrigger(this);
		else return visitor.visitChildren(this);
	}
}


export class TriggerClassContext extends ParserRuleContext {
	public literalString(): LiteralStringContext {
		return this.getRuleContext(0, LiteralStringContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_triggerClass; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterTriggerClass) listener.enterTriggerClass(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitTriggerClass) listener.exitTriggerClass(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitTriggerClass) return visitor.visitTriggerClass(this);
		else return visitor.visitChildren(this);
	}
}


export class MaterializedViewContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode { return this.getToken(CqlParser.OBJECT_NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_materializedView; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterMaterializedView) listener.enterMaterializedView(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitMaterializedView) listener.exitMaterializedView(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitMaterializedView) return visitor.visitMaterializedView(this);
		else return visitor.visitChildren(this);
	}
}


export class TypeContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode { return this.getToken(CqlParser.OBJECT_NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_type; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterType) listener.enterType(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitType) listener.exitType(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitType) return visitor.visitType(this);
		else return visitor.visitChildren(this);
	}
}


export class AggregateContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode { return this.getToken(CqlParser.OBJECT_NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_aggregate; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterAggregate) listener.enterAggregate(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitAggregate) listener.exitAggregate(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitAggregate) return visitor.visitAggregate(this);
		else return visitor.visitChildren(this);
	}
}


export class FunctionContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode { return this.getToken(CqlParser.OBJECT_NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_function; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterFunction) listener.enterFunction(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitFunction) listener.exitFunction(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitFunction) return visitor.visitFunction(this);
		else return visitor.visitChildren(this);
	}
}


export class LanguageContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode { return this.getToken(CqlParser.OBJECT_NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_language; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterLanguage) listener.enterLanguage(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitLanguage) listener.exitLanguage(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitLanguage) return visitor.visitLanguage(this);
		else return visitor.visitChildren(this);
	}
}


export class UserContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode { return this.getToken(CqlParser.OBJECT_NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_user; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterUser) listener.enterUser(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitUser) listener.exitUser(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitUser) return visitor.visitUser(this);
		else return visitor.visitChildren(this);
	}
}


export class PasswordContext extends ParserRuleContext {
	public literalString(): LiteralStringContext {
		return this.getRuleContext(0, LiteralStringContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_password; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterPassword) listener.enterPassword(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitPassword) listener.exitPassword(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitPassword) return visitor.visitPassword(this);
		else return visitor.visitChildren(this);
	}
}


export class HashKeyContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode { return this.getToken(CqlParser.OBJECT_NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_hashKey; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterHashKey) listener.enterHashKey(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitHashKey) listener.exitHashKey(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitHashKey) return visitor.visitHashKey(this);
		else return visitor.visitChildren(this);
	}
}


export class ParamContext extends ParserRuleContext {
	public paramName(): ParamNameContext {
		return this.getRuleContext(0, ParamNameContext);
	}
	public dataType(): DataTypeContext {
		return this.getRuleContext(0, DataTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_param; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterParam) listener.enterParam(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitParam) listener.exitParam(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitParam) return visitor.visitParam(this);
		else return visitor.visitChildren(this);
	}
}


export class ParamNameContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode { return this.getToken(CqlParser.OBJECT_NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_paramName; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterParamName) listener.enterParamName(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitParamName) listener.exitParamName(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitParamName) return visitor.visitParamName(this);
		else return visitor.visitChildren(this);
	}
}


export class KwAddContext extends ParserRuleContext {
	public K_ADD(): TerminalNode { return this.getToken(CqlParser.K_ADD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwAdd; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwAdd) listener.enterKwAdd(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwAdd) listener.exitKwAdd(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwAdd) return visitor.visitKwAdd(this);
		else return visitor.visitChildren(this);
	}
}


export class KwAggregateContext extends ParserRuleContext {
	public K_AGGREGATE(): TerminalNode { return this.getToken(CqlParser.K_AGGREGATE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwAggregate; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwAggregate) listener.enterKwAggregate(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwAggregate) listener.exitKwAggregate(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwAggregate) return visitor.visitKwAggregate(this);
		else return visitor.visitChildren(this);
	}
}


export class KwAllContext extends ParserRuleContext {
	public K_ALL(): TerminalNode { return this.getToken(CqlParser.K_ALL, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwAll; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwAll) listener.enterKwAll(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwAll) listener.exitKwAll(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwAll) return visitor.visitKwAll(this);
		else return visitor.visitChildren(this);
	}
}


export class KwAllPermissionsContext extends ParserRuleContext {
	public K_ALL(): TerminalNode { return this.getToken(CqlParser.K_ALL, 0); }
	public K_PERMISSIONS(): TerminalNode { return this.getToken(CqlParser.K_PERMISSIONS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwAllPermissions; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwAllPermissions) listener.enterKwAllPermissions(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwAllPermissions) listener.exitKwAllPermissions(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwAllPermissions) return visitor.visitKwAllPermissions(this);
		else return visitor.visitChildren(this);
	}
}


export class KwAllowContext extends ParserRuleContext {
	public K_ALLOW(): TerminalNode { return this.getToken(CqlParser.K_ALLOW, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwAllow; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwAllow) listener.enterKwAllow(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwAllow) listener.exitKwAllow(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwAllow) return visitor.visitKwAllow(this);
		else return visitor.visitChildren(this);
	}
}


export class KwAllowFilteringContext extends ParserRuleContext {
	public K_ALLOW(): TerminalNode { return this.getToken(CqlParser.K_ALLOW, 0); }
	public K_FILTERING(): TerminalNode { return this.getToken(CqlParser.K_FILTERING, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwAllowFiltering; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwAllowFiltering) listener.enterKwAllowFiltering(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwAllowFiltering) listener.exitKwAllowFiltering(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwAllowFiltering) return visitor.visitKwAllowFiltering(this);
		else return visitor.visitChildren(this);
	}
}


export class KwAlterContext extends ParserRuleContext {
	public K_ALTER(): TerminalNode { return this.getToken(CqlParser.K_ALTER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwAlter; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwAlter) listener.enterKwAlter(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwAlter) listener.exitKwAlter(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwAlter) return visitor.visitKwAlter(this);
		else return visitor.visitChildren(this);
	}
}


export class KwAndContext extends ParserRuleContext {
	public K_AND(): TerminalNode { return this.getToken(CqlParser.K_AND, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwAnd; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwAnd) listener.enterKwAnd(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwAnd) listener.exitKwAnd(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwAnd) return visitor.visitKwAnd(this);
		else return visitor.visitChildren(this);
	}
}


export class KwApplyContext extends ParserRuleContext {
	public K_APPLY(): TerminalNode { return this.getToken(CqlParser.K_APPLY, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwApply; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwApply) listener.enterKwApply(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwApply) listener.exitKwApply(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwApply) return visitor.visitKwApply(this);
		else return visitor.visitChildren(this);
	}
}


export class KwAsContext extends ParserRuleContext {
	public K_AS(): TerminalNode { return this.getToken(CqlParser.K_AS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwAs; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwAs) listener.enterKwAs(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwAs) listener.exitKwAs(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwAs) return visitor.visitKwAs(this);
		else return visitor.visitChildren(this);
	}
}


export class KwAscContext extends ParserRuleContext {
	public K_ASC(): TerminalNode { return this.getToken(CqlParser.K_ASC, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwAsc; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwAsc) listener.enterKwAsc(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwAsc) listener.exitKwAsc(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwAsc) return visitor.visitKwAsc(this);
		else return visitor.visitChildren(this);
	}
}


export class KwAuthorizeContext extends ParserRuleContext {
	public K_AUTHORIZE(): TerminalNode { return this.getToken(CqlParser.K_AUTHORIZE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwAuthorize; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwAuthorize) listener.enterKwAuthorize(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwAuthorize) listener.exitKwAuthorize(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwAuthorize) return visitor.visitKwAuthorize(this);
		else return visitor.visitChildren(this);
	}
}


export class KwBatchContext extends ParserRuleContext {
	public K_BATCH(): TerminalNode { return this.getToken(CqlParser.K_BATCH, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwBatch; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwBatch) listener.enterKwBatch(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwBatch) listener.exitKwBatch(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwBatch) return visitor.visitKwBatch(this);
		else return visitor.visitChildren(this);
	}
}


export class KwBeginContext extends ParserRuleContext {
	public K_BEGIN(): TerminalNode { return this.getToken(CqlParser.K_BEGIN, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwBegin; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwBegin) listener.enterKwBegin(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwBegin) listener.exitKwBegin(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwBegin) return visitor.visitKwBegin(this);
		else return visitor.visitChildren(this);
	}
}


export class KwByContext extends ParserRuleContext {
	public K_BY(): TerminalNode { return this.getToken(CqlParser.K_BY, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwBy; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwBy) listener.enterKwBy(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwBy) listener.exitKwBy(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwBy) return visitor.visitKwBy(this);
		else return visitor.visitChildren(this);
	}
}


export class KwCalledContext extends ParserRuleContext {
	public K_CALLED(): TerminalNode { return this.getToken(CqlParser.K_CALLED, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwCalled; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwCalled) listener.enterKwCalled(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwCalled) listener.exitKwCalled(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwCalled) return visitor.visitKwCalled(this);
		else return visitor.visitChildren(this);
	}
}


export class KwClusteringContext extends ParserRuleContext {
	public K_CLUSTERING(): TerminalNode { return this.getToken(CqlParser.K_CLUSTERING, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwClustering; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwClustering) listener.enterKwClustering(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwClustering) listener.exitKwClustering(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwClustering) return visitor.visitKwClustering(this);
		else return visitor.visitChildren(this);
	}
}


export class KwCompactContext extends ParserRuleContext {
	public K_COMPACT(): TerminalNode { return this.getToken(CqlParser.K_COMPACT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwCompact; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwCompact) listener.enterKwCompact(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwCompact) listener.exitKwCompact(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwCompact) return visitor.visitKwCompact(this);
		else return visitor.visitChildren(this);
	}
}


export class KwContainsContext extends ParserRuleContext {
	public K_CONTAINS(): TerminalNode { return this.getToken(CqlParser.K_CONTAINS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwContains; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwContains) listener.enterKwContains(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwContains) listener.exitKwContains(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwContains) return visitor.visitKwContains(this);
		else return visitor.visitChildren(this);
	}
}


export class KwContainsKeyContext extends ParserRuleContext {
	public K_CONTAINS(): TerminalNode { return this.getToken(CqlParser.K_CONTAINS, 0); }
	public K_KEY(): TerminalNode { return this.getToken(CqlParser.K_KEY, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwContainsKey; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwContainsKey) listener.enterKwContainsKey(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwContainsKey) listener.exitKwContainsKey(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwContainsKey) return visitor.visitKwContainsKey(this);
		else return visitor.visitChildren(this);
	}
}


export class KwCreateContext extends ParserRuleContext {
	public K_CREATE(): TerminalNode { return this.getToken(CqlParser.K_CREATE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwCreate; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwCreate) listener.enterKwCreate(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwCreate) listener.exitKwCreate(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwCreate) return visitor.visitKwCreate(this);
		else return visitor.visitChildren(this);
	}
}


export class KwDeleteContext extends ParserRuleContext {
	public K_DELETE(): TerminalNode { return this.getToken(CqlParser.K_DELETE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwDelete; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwDelete) listener.enterKwDelete(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwDelete) listener.exitKwDelete(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwDelete) return visitor.visitKwDelete(this);
		else return visitor.visitChildren(this);
	}
}


export class KwDescContext extends ParserRuleContext {
	public K_DESC(): TerminalNode { return this.getToken(CqlParser.K_DESC, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwDesc; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwDesc) listener.enterKwDesc(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwDesc) listener.exitKwDesc(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwDesc) return visitor.visitKwDesc(this);
		else return visitor.visitChildren(this);
	}
}


export class KwDescibeContext extends ParserRuleContext {
	public K_DESCRIBE(): TerminalNode { return this.getToken(CqlParser.K_DESCRIBE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwDescibe; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwDescibe) listener.enterKwDescibe(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwDescibe) listener.exitKwDescibe(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwDescibe) return visitor.visitKwDescibe(this);
		else return visitor.visitChildren(this);
	}
}


export class KwDistinctContext extends ParserRuleContext {
	public K_DISTINCT(): TerminalNode { return this.getToken(CqlParser.K_DISTINCT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwDistinct; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwDistinct) listener.enterKwDistinct(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwDistinct) listener.exitKwDistinct(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwDistinct) return visitor.visitKwDistinct(this);
		else return visitor.visitChildren(this);
	}
}


export class KwDropContext extends ParserRuleContext {
	public K_DROP(): TerminalNode { return this.getToken(CqlParser.K_DROP, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwDrop; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwDrop) listener.enterKwDrop(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwDrop) listener.exitKwDrop(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwDrop) return visitor.visitKwDrop(this);
		else return visitor.visitChildren(this);
	}
}


export class KwDurableWritesContext extends ParserRuleContext {
	public K_DURABLE_WRITES(): TerminalNode { return this.getToken(CqlParser.K_DURABLE_WRITES, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwDurableWrites; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwDurableWrites) listener.enterKwDurableWrites(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwDurableWrites) listener.exitKwDurableWrites(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwDurableWrites) return visitor.visitKwDurableWrites(this);
		else return visitor.visitChildren(this);
	}
}


export class KwEntriesContext extends ParserRuleContext {
	public K_ENTRIES(): TerminalNode { return this.getToken(CqlParser.K_ENTRIES, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwEntries; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwEntries) listener.enterKwEntries(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwEntries) listener.exitKwEntries(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwEntries) return visitor.visitKwEntries(this);
		else return visitor.visitChildren(this);
	}
}


export class KwExecuteContext extends ParserRuleContext {
	public K_EXECUTE(): TerminalNode { return this.getToken(CqlParser.K_EXECUTE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwExecute; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwExecute) listener.enterKwExecute(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwExecute) listener.exitKwExecute(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwExecute) return visitor.visitKwExecute(this);
		else return visitor.visitChildren(this);
	}
}


export class KwExistsContext extends ParserRuleContext {
	public K_EXISTS(): TerminalNode { return this.getToken(CqlParser.K_EXISTS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwExists; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwExists) listener.enterKwExists(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwExists) listener.exitKwExists(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwExists) return visitor.visitKwExists(this);
		else return visitor.visitChildren(this);
	}
}


export class KwFilteringContext extends ParserRuleContext {
	public K_FILTERING(): TerminalNode { return this.getToken(CqlParser.K_FILTERING, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwFiltering; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwFiltering) listener.enterKwFiltering(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwFiltering) listener.exitKwFiltering(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwFiltering) return visitor.visitKwFiltering(this);
		else return visitor.visitChildren(this);
	}
}


export class KwFinalfuncContext extends ParserRuleContext {
	public K_FINALFUNC(): TerminalNode { return this.getToken(CqlParser.K_FINALFUNC, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwFinalfunc; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwFinalfunc) listener.enterKwFinalfunc(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwFinalfunc) listener.exitKwFinalfunc(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwFinalfunc) return visitor.visitKwFinalfunc(this);
		else return visitor.visitChildren(this);
	}
}


export class KwFromContext extends ParserRuleContext {
	public K_FROM(): TerminalNode { return this.getToken(CqlParser.K_FROM, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwFrom; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwFrom) listener.enterKwFrom(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwFrom) listener.exitKwFrom(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwFrom) return visitor.visitKwFrom(this);
		else return visitor.visitChildren(this);
	}
}


export class KwFullContext extends ParserRuleContext {
	public K_FULL(): TerminalNode { return this.getToken(CqlParser.K_FULL, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwFull; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwFull) listener.enterKwFull(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwFull) listener.exitKwFull(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwFull) return visitor.visitKwFull(this);
		else return visitor.visitChildren(this);
	}
}


export class KwFunctionContext extends ParserRuleContext {
	public K_FUNCTION(): TerminalNode { return this.getToken(CqlParser.K_FUNCTION, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwFunction; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwFunction) listener.enterKwFunction(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwFunction) listener.exitKwFunction(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwFunction) return visitor.visitKwFunction(this);
		else return visitor.visitChildren(this);
	}
}


export class KwFunctionsContext extends ParserRuleContext {
	public K_FUNCTIONS(): TerminalNode { return this.getToken(CqlParser.K_FUNCTIONS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwFunctions; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwFunctions) listener.enterKwFunctions(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwFunctions) listener.exitKwFunctions(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwFunctions) return visitor.visitKwFunctions(this);
		else return visitor.visitChildren(this);
	}
}


export class KwGrantContext extends ParserRuleContext {
	public K_GRANT(): TerminalNode { return this.getToken(CqlParser.K_GRANT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwGrant; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwGrant) listener.enterKwGrant(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwGrant) listener.exitKwGrant(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwGrant) return visitor.visitKwGrant(this);
		else return visitor.visitChildren(this);
	}
}


export class KwIfContext extends ParserRuleContext {
	public K_IF(): TerminalNode { return this.getToken(CqlParser.K_IF, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwIf; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwIf) listener.enterKwIf(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwIf) listener.exitKwIf(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwIf) return visitor.visitKwIf(this);
		else return visitor.visitChildren(this);
	}
}


export class KwInContext extends ParserRuleContext {
	public K_IN(): TerminalNode { return this.getToken(CqlParser.K_IN, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwIn; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwIn) listener.enterKwIn(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwIn) listener.exitKwIn(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwIn) return visitor.visitKwIn(this);
		else return visitor.visitChildren(this);
	}
}


export class KwIndexContext extends ParserRuleContext {
	public K_INDEX(): TerminalNode { return this.getToken(CqlParser.K_INDEX, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwIndex; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwIndex) listener.enterKwIndex(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwIndex) listener.exitKwIndex(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwIndex) return visitor.visitKwIndex(this);
		else return visitor.visitChildren(this);
	}
}


export class KwInitcondContext extends ParserRuleContext {
	public K_INITCOND(): TerminalNode { return this.getToken(CqlParser.K_INITCOND, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwInitcond; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwInitcond) listener.enterKwInitcond(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwInitcond) listener.exitKwInitcond(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwInitcond) return visitor.visitKwInitcond(this);
		else return visitor.visitChildren(this);
	}
}


export class KwInputContext extends ParserRuleContext {
	public K_INPUT(): TerminalNode { return this.getToken(CqlParser.K_INPUT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwInput; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwInput) listener.enterKwInput(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwInput) listener.exitKwInput(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwInput) return visitor.visitKwInput(this);
		else return visitor.visitChildren(this);
	}
}


export class KwInsertContext extends ParserRuleContext {
	public K_INSERT(): TerminalNode { return this.getToken(CqlParser.K_INSERT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwInsert; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwInsert) listener.enterKwInsert(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwInsert) listener.exitKwInsert(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwInsert) return visitor.visitKwInsert(this);
		else return visitor.visitChildren(this);
	}
}


export class KwIntoContext extends ParserRuleContext {
	public K_INTO(): TerminalNode { return this.getToken(CqlParser.K_INTO, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwInto; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwInto) listener.enterKwInto(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwInto) listener.exitKwInto(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwInto) return visitor.visitKwInto(this);
		else return visitor.visitChildren(this);
	}
}


export class KwIsContext extends ParserRuleContext {
	public K_IS(): TerminalNode { return this.getToken(CqlParser.K_IS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwIs; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwIs) listener.enterKwIs(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwIs) listener.exitKwIs(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwIs) return visitor.visitKwIs(this);
		else return visitor.visitChildren(this);
	}
}


export class KwKeyContext extends ParserRuleContext {
	public K_KEY(): TerminalNode { return this.getToken(CqlParser.K_KEY, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwKey; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwKey) listener.enterKwKey(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwKey) listener.exitKwKey(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwKey) return visitor.visitKwKey(this);
		else return visitor.visitChildren(this);
	}
}


export class KwKeysContext extends ParserRuleContext {
	public K_KEYS(): TerminalNode { return this.getToken(CqlParser.K_KEYS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwKeys; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwKeys) listener.enterKwKeys(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwKeys) listener.exitKwKeys(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwKeys) return visitor.visitKwKeys(this);
		else return visitor.visitChildren(this);
	}
}


export class KwKeyspaceContext extends ParserRuleContext {
	public K_KEYSPACE(): TerminalNode { return this.getToken(CqlParser.K_KEYSPACE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwKeyspace; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwKeyspace) listener.enterKwKeyspace(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwKeyspace) listener.exitKwKeyspace(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwKeyspace) return visitor.visitKwKeyspace(this);
		else return visitor.visitChildren(this);
	}
}


export class KwKeyspacesContext extends ParserRuleContext {
	public K_KEYSPACES(): TerminalNode { return this.getToken(CqlParser.K_KEYSPACES, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwKeyspaces; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwKeyspaces) listener.enterKwKeyspaces(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwKeyspaces) listener.exitKwKeyspaces(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwKeyspaces) return visitor.visitKwKeyspaces(this);
		else return visitor.visitChildren(this);
	}
}


export class KwLanguageContext extends ParserRuleContext {
	public K_LANGUAGE(): TerminalNode { return this.getToken(CqlParser.K_LANGUAGE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwLanguage; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwLanguage) listener.enterKwLanguage(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwLanguage) listener.exitKwLanguage(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwLanguage) return visitor.visitKwLanguage(this);
		else return visitor.visitChildren(this);
	}
}


export class KwLimitContext extends ParserRuleContext {
	public K_LIMIT(): TerminalNode { return this.getToken(CqlParser.K_LIMIT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwLimit; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwLimit) listener.enterKwLimit(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwLimit) listener.exitKwLimit(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwLimit) return visitor.visitKwLimit(this);
		else return visitor.visitChildren(this);
	}
}


export class KwListContext extends ParserRuleContext {
	public K_LIST(): TerminalNode { return this.getToken(CqlParser.K_LIST, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwList; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwList) listener.enterKwList(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwList) listener.exitKwList(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwList) return visitor.visitKwList(this);
		else return visitor.visitChildren(this);
	}
}


export class KwLoggedContext extends ParserRuleContext {
	public K_LOGGED(): TerminalNode { return this.getToken(CqlParser.K_LOGGED, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwLogged; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwLogged) listener.enterKwLogged(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwLogged) listener.exitKwLogged(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwLogged) return visitor.visitKwLogged(this);
		else return visitor.visitChildren(this);
	}
}


export class KwLoginContext extends ParserRuleContext {
	public K_LOGIN(): TerminalNode { return this.getToken(CqlParser.K_LOGIN, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwLogin; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwLogin) listener.enterKwLogin(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwLogin) listener.exitKwLogin(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwLogin) return visitor.visitKwLogin(this);
		else return visitor.visitChildren(this);
	}
}


export class KwMaterializedContext extends ParserRuleContext {
	public K_MATERIALIZED(): TerminalNode { return this.getToken(CqlParser.K_MATERIALIZED, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwMaterialized; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwMaterialized) listener.enterKwMaterialized(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwMaterialized) listener.exitKwMaterialized(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwMaterialized) return visitor.visitKwMaterialized(this);
		else return visitor.visitChildren(this);
	}
}


export class KwModifyContext extends ParserRuleContext {
	public K_MODIFY(): TerminalNode { return this.getToken(CqlParser.K_MODIFY, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwModify; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwModify) listener.enterKwModify(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwModify) listener.exitKwModify(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwModify) return visitor.visitKwModify(this);
		else return visitor.visitChildren(this);
	}
}


export class KwNosuperuserContext extends ParserRuleContext {
	public K_NOSUPERUSER(): TerminalNode { return this.getToken(CqlParser.K_NOSUPERUSER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwNosuperuser; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwNosuperuser) listener.enterKwNosuperuser(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwNosuperuser) listener.exitKwNosuperuser(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwNosuperuser) return visitor.visitKwNosuperuser(this);
		else return visitor.visitChildren(this);
	}
}


export class KwNorecursiveContext extends ParserRuleContext {
	public K_NORECURSIVE(): TerminalNode { return this.getToken(CqlParser.K_NORECURSIVE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwNorecursive; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwNorecursive) listener.enterKwNorecursive(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwNorecursive) listener.exitKwNorecursive(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwNorecursive) return visitor.visitKwNorecursive(this);
		else return visitor.visitChildren(this);
	}
}


export class KwNotContext extends ParserRuleContext {
	public K_NOT(): TerminalNode { return this.getToken(CqlParser.K_NOT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwNot; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwNot) listener.enterKwNot(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwNot) listener.exitKwNot(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwNot) return visitor.visitKwNot(this);
		else return visitor.visitChildren(this);
	}
}


export class KwNullContext extends ParserRuleContext {
	public K_NULL(): TerminalNode { return this.getToken(CqlParser.K_NULL, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwNull; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwNull) listener.enterKwNull(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwNull) listener.exitKwNull(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwNull) return visitor.visitKwNull(this);
		else return visitor.visitChildren(this);
	}
}


export class KwOfContext extends ParserRuleContext {
	public K_OF(): TerminalNode { return this.getToken(CqlParser.K_OF, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwOf; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwOf) listener.enterKwOf(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwOf) listener.exitKwOf(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwOf) return visitor.visitKwOf(this);
		else return visitor.visitChildren(this);
	}
}


export class KwOnContext extends ParserRuleContext {
	public K_ON(): TerminalNode { return this.getToken(CqlParser.K_ON, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwOn; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwOn) listener.enterKwOn(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwOn) listener.exitKwOn(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwOn) return visitor.visitKwOn(this);
		else return visitor.visitChildren(this);
	}
}


export class KwOptionsContext extends ParserRuleContext {
	public K_OPTIONS(): TerminalNode { return this.getToken(CqlParser.K_OPTIONS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwOptions; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwOptions) listener.enterKwOptions(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwOptions) listener.exitKwOptions(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwOptions) return visitor.visitKwOptions(this);
		else return visitor.visitChildren(this);
	}
}


export class KwOrContext extends ParserRuleContext {
	public K_OR(): TerminalNode { return this.getToken(CqlParser.K_OR, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwOr; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwOr) listener.enterKwOr(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwOr) listener.exitKwOr(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwOr) return visitor.visitKwOr(this);
		else return visitor.visitChildren(this);
	}
}


export class KwOrderContext extends ParserRuleContext {
	public K_ORDER(): TerminalNode { return this.getToken(CqlParser.K_ORDER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwOrder; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwOrder) listener.enterKwOrder(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwOrder) listener.exitKwOrder(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwOrder) return visitor.visitKwOrder(this);
		else return visitor.visitChildren(this);
	}
}


export class KwOrderByContext extends ParserRuleContext {
	public K_ORDER(): TerminalNode { return this.getToken(CqlParser.K_ORDER, 0); }
	public K_BY(): TerminalNode { return this.getToken(CqlParser.K_BY, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwOrderBy; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwOrderBy) listener.enterKwOrderBy(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwOrderBy) listener.exitKwOrderBy(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwOrderBy) return visitor.visitKwOrderBy(this);
		else return visitor.visitChildren(this);
	}
}


export class KwPasswordContext extends ParserRuleContext {
	public K_PASSWORD(): TerminalNode { return this.getToken(CqlParser.K_PASSWORD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwPassword; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwPassword) listener.enterKwPassword(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwPassword) listener.exitKwPassword(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwPassword) return visitor.visitKwPassword(this);
		else return visitor.visitChildren(this);
	}
}


export class KwPrimaryContext extends ParserRuleContext {
	public K_PRIMARY(): TerminalNode { return this.getToken(CqlParser.K_PRIMARY, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwPrimary; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwPrimary) listener.enterKwPrimary(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwPrimary) listener.exitKwPrimary(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwPrimary) return visitor.visitKwPrimary(this);
		else return visitor.visitChildren(this);
	}
}


export class KwRenameContext extends ParserRuleContext {
	public K_RENAME(): TerminalNode { return this.getToken(CqlParser.K_RENAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwRename; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwRename) listener.enterKwRename(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwRename) listener.exitKwRename(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwRename) return visitor.visitKwRename(this);
		else return visitor.visitChildren(this);
	}
}


export class KwReplaceContext extends ParserRuleContext {
	public K_REPLACE(): TerminalNode { return this.getToken(CqlParser.K_REPLACE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwReplace; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwReplace) listener.enterKwReplace(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwReplace) listener.exitKwReplace(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwReplace) return visitor.visitKwReplace(this);
		else return visitor.visitChildren(this);
	}
}


export class KwReplicationContext extends ParserRuleContext {
	public K_REPLICATION(): TerminalNode { return this.getToken(CqlParser.K_REPLICATION, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwReplication; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwReplication) listener.enterKwReplication(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwReplication) listener.exitKwReplication(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwReplication) return visitor.visitKwReplication(this);
		else return visitor.visitChildren(this);
	}
}


export class KwReturnsContext extends ParserRuleContext {
	public K_RETURNS(): TerminalNode { return this.getToken(CqlParser.K_RETURNS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwReturns; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwReturns) listener.enterKwReturns(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwReturns) listener.exitKwReturns(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwReturns) return visitor.visitKwReturns(this);
		else return visitor.visitChildren(this);
	}
}


export class KwRoleContext extends ParserRuleContext {
	public K_ROLE(): TerminalNode { return this.getToken(CqlParser.K_ROLE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwRole; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwRole) listener.enterKwRole(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwRole) listener.exitKwRole(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwRole) return visitor.visitKwRole(this);
		else return visitor.visitChildren(this);
	}
}


export class KwRolesContext extends ParserRuleContext {
	public K_ROLES(): TerminalNode { return this.getToken(CqlParser.K_ROLES, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwRoles; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwRoles) listener.enterKwRoles(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwRoles) listener.exitKwRoles(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwRoles) return visitor.visitKwRoles(this);
		else return visitor.visitChildren(this);
	}
}


export class KwSelectContext extends ParserRuleContext {
	public K_SELECT(): TerminalNode { return this.getToken(CqlParser.K_SELECT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwSelect; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwSelect) listener.enterKwSelect(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwSelect) listener.exitKwSelect(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwSelect) return visitor.visitKwSelect(this);
		else return visitor.visitChildren(this);
	}
}


export class KwSetContext extends ParserRuleContext {
	public K_SET(): TerminalNode { return this.getToken(CqlParser.K_SET, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwSet; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwSet) listener.enterKwSet(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwSet) listener.exitKwSet(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwSet) return visitor.visitKwSet(this);
		else return visitor.visitChildren(this);
	}
}


export class KwSfuncContext extends ParserRuleContext {
	public K_SFUNC(): TerminalNode { return this.getToken(CqlParser.K_SFUNC, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwSfunc; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwSfunc) listener.enterKwSfunc(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwSfunc) listener.exitKwSfunc(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwSfunc) return visitor.visitKwSfunc(this);
		else return visitor.visitChildren(this);
	}
}


export class KwStaticContext extends ParserRuleContext {
	public K_STATIC(): TerminalNode { return this.getToken(CqlParser.K_STATIC, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwStatic; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwStatic) listener.enterKwStatic(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwStatic) listener.exitKwStatic(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwStatic) return visitor.visitKwStatic(this);
		else return visitor.visitChildren(this);
	}
}


export class KwStorageContext extends ParserRuleContext {
	public K_STORAGE(): TerminalNode { return this.getToken(CqlParser.K_STORAGE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwStorage; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwStorage) listener.enterKwStorage(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwStorage) listener.exitKwStorage(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwStorage) return visitor.visitKwStorage(this);
		else return visitor.visitChildren(this);
	}
}


export class KwStypeContext extends ParserRuleContext {
	public K_STYPE(): TerminalNode { return this.getToken(CqlParser.K_STYPE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwStype; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwStype) listener.enterKwStype(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwStype) listener.exitKwStype(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwStype) return visitor.visitKwStype(this);
		else return visitor.visitChildren(this);
	}
}


export class KwSuperuserContext extends ParserRuleContext {
	public K_SUPERUSER(): TerminalNode { return this.getToken(CqlParser.K_SUPERUSER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwSuperuser; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwSuperuser) listener.enterKwSuperuser(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwSuperuser) listener.exitKwSuperuser(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwSuperuser) return visitor.visitKwSuperuser(this);
		else return visitor.visitChildren(this);
	}
}


export class KwTableContext extends ParserRuleContext {
	public K_TABLE(): TerminalNode { return this.getToken(CqlParser.K_TABLE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwTable; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwTable) listener.enterKwTable(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwTable) listener.exitKwTable(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwTable) return visitor.visitKwTable(this);
		else return visitor.visitChildren(this);
	}
}


export class KwTimestampContext extends ParserRuleContext {
	public K_TIMESTAMP(): TerminalNode { return this.getToken(CqlParser.K_TIMESTAMP, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwTimestamp; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwTimestamp) listener.enterKwTimestamp(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwTimestamp) listener.exitKwTimestamp(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwTimestamp) return visitor.visitKwTimestamp(this);
		else return visitor.visitChildren(this);
	}
}


export class KwToContext extends ParserRuleContext {
	public K_TO(): TerminalNode { return this.getToken(CqlParser.K_TO, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwTo; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwTo) listener.enterKwTo(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwTo) listener.exitKwTo(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwTo) return visitor.visitKwTo(this);
		else return visitor.visitChildren(this);
	}
}


export class KwTriggerContext extends ParserRuleContext {
	public K_TRIGGER(): TerminalNode { return this.getToken(CqlParser.K_TRIGGER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwTrigger; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwTrigger) listener.enterKwTrigger(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwTrigger) listener.exitKwTrigger(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwTrigger) return visitor.visitKwTrigger(this);
		else return visitor.visitChildren(this);
	}
}


export class KwTruncateContext extends ParserRuleContext {
	public K_TRUNCATE(): TerminalNode { return this.getToken(CqlParser.K_TRUNCATE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwTruncate; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwTruncate) listener.enterKwTruncate(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwTruncate) listener.exitKwTruncate(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwTruncate) return visitor.visitKwTruncate(this);
		else return visitor.visitChildren(this);
	}
}


export class KwTtlContext extends ParserRuleContext {
	public K_TTL(): TerminalNode { return this.getToken(CqlParser.K_TTL, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwTtl; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwTtl) listener.enterKwTtl(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwTtl) listener.exitKwTtl(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwTtl) return visitor.visitKwTtl(this);
		else return visitor.visitChildren(this);
	}
}


export class KwTypeContext extends ParserRuleContext {
	public K_TYPE(): TerminalNode { return this.getToken(CqlParser.K_TYPE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwType; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwType) listener.enterKwType(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwType) listener.exitKwType(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwType) return visitor.visitKwType(this);
		else return visitor.visitChildren(this);
	}
}


export class KwUnloggedContext extends ParserRuleContext {
	public K_UNLOGGED(): TerminalNode { return this.getToken(CqlParser.K_UNLOGGED, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwUnlogged; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwUnlogged) listener.enterKwUnlogged(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwUnlogged) listener.exitKwUnlogged(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwUnlogged) return visitor.visitKwUnlogged(this);
		else return visitor.visitChildren(this);
	}
}


export class KwUpdateContext extends ParserRuleContext {
	public K_UPDATE(): TerminalNode { return this.getToken(CqlParser.K_UPDATE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwUpdate; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwUpdate) listener.enterKwUpdate(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwUpdate) listener.exitKwUpdate(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwUpdate) return visitor.visitKwUpdate(this);
		else return visitor.visitChildren(this);
	}
}


export class KwUseContext extends ParserRuleContext {
	public K_USE(): TerminalNode { return this.getToken(CqlParser.K_USE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwUse; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwUse) listener.enterKwUse(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwUse) listener.exitKwUse(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwUse) return visitor.visitKwUse(this);
		else return visitor.visitChildren(this);
	}
}


export class KwUserContext extends ParserRuleContext {
	public K_USER(): TerminalNode { return this.getToken(CqlParser.K_USER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwUser; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwUser) listener.enterKwUser(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwUser) listener.exitKwUser(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwUser) return visitor.visitKwUser(this);
		else return visitor.visitChildren(this);
	}
}


export class KwUsersContext extends ParserRuleContext {
	public K_USERS(): TerminalNode { return this.getToken(CqlParser.K_USERS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwUsers; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwUsers) listener.enterKwUsers(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwUsers) listener.exitKwUsers(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwUsers) return visitor.visitKwUsers(this);
		else return visitor.visitChildren(this);
	}
}


export class KwUsingContext extends ParserRuleContext {
	public K_USING(): TerminalNode { return this.getToken(CqlParser.K_USING, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwUsing; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwUsing) listener.enterKwUsing(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwUsing) listener.exitKwUsing(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwUsing) return visitor.visitKwUsing(this);
		else return visitor.visitChildren(this);
	}
}


export class KwValuesContext extends ParserRuleContext {
	public K_VALUES(): TerminalNode { return this.getToken(CqlParser.K_VALUES, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwValues; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwValues) listener.enterKwValues(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwValues) listener.exitKwValues(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwValues) return visitor.visitKwValues(this);
		else return visitor.visitChildren(this);
	}
}


export class KwViewContext extends ParserRuleContext {
	public K_VIEW(): TerminalNode { return this.getToken(CqlParser.K_VIEW, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwView; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwView) listener.enterKwView(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwView) listener.exitKwView(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwView) return visitor.visitKwView(this);
		else return visitor.visitChildren(this);
	}
}


export class KwWhereContext extends ParserRuleContext {
	public K_WHERE(): TerminalNode { return this.getToken(CqlParser.K_WHERE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwWhere; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwWhere) listener.enterKwWhere(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwWhere) listener.exitKwWhere(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwWhere) return visitor.visitKwWhere(this);
		else return visitor.visitChildren(this);
	}
}


export class KwWithContext extends ParserRuleContext {
	public K_WITH(): TerminalNode { return this.getToken(CqlParser.K_WITH, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwWith; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwWith) listener.enterKwWith(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwWith) listener.exitKwWith(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwWith) return visitor.visitKwWith(this);
		else return visitor.visitChildren(this);
	}
}


export class KwRevokeContext extends ParserRuleContext {
	public K_REVOKE(): TerminalNode { return this.getToken(CqlParser.K_REVOKE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_kwRevoke; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterKwRevoke) listener.enterKwRevoke(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitKwRevoke) listener.exitKwRevoke(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitKwRevoke) return visitor.visitKwRevoke(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeAsciiContext extends ParserRuleContext {
	public K_ASCII(): TerminalNode { return this.getToken(CqlParser.K_ASCII, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeAscii; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeAscii) listener.enterDataTypeAscii(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeAscii) listener.exitDataTypeAscii(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeAscii) return visitor.visitDataTypeAscii(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeBigintContext extends ParserRuleContext {
	public K_BIGINT(): TerminalNode { return this.getToken(CqlParser.K_BIGINT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeBigint; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeBigint) listener.enterDataTypeBigint(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeBigint) listener.exitDataTypeBigint(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeBigint) return visitor.visitDataTypeBigint(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeBlobContext extends ParserRuleContext {
	public K_BLOB(): TerminalNode { return this.getToken(CqlParser.K_BLOB, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeBlob; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeBlob) listener.enterDataTypeBlob(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeBlob) listener.exitDataTypeBlob(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeBlob) return visitor.visitDataTypeBlob(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeBooleanContext extends ParserRuleContext {
	public K_BOOLEAN(): TerminalNode { return this.getToken(CqlParser.K_BOOLEAN, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeBoolean; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeBoolean) listener.enterDataTypeBoolean(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeBoolean) listener.exitDataTypeBoolean(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeBoolean) return visitor.visitDataTypeBoolean(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeCounterContext extends ParserRuleContext {
	public K_COUNTER(): TerminalNode { return this.getToken(CqlParser.K_COUNTER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeCounter; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeCounter) listener.enterDataTypeCounter(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeCounter) listener.exitDataTypeCounter(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeCounter) return visitor.visitDataTypeCounter(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeDateContext extends ParserRuleContext {
	public K_DATE(): TerminalNode { return this.getToken(CqlParser.K_DATE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeDate; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeDate) listener.enterDataTypeDate(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeDate) listener.exitDataTypeDate(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeDate) return visitor.visitDataTypeDate(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeDecimalContext extends ParserRuleContext {
	public K_DECIMAL(): TerminalNode { return this.getToken(CqlParser.K_DECIMAL, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeDecimal; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeDecimal) listener.enterDataTypeDecimal(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeDecimal) listener.exitDataTypeDecimal(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeDecimal) return visitor.visitDataTypeDecimal(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeDoubleContext extends ParserRuleContext {
	public K_DOUBLE(): TerminalNode { return this.getToken(CqlParser.K_DOUBLE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeDouble; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeDouble) listener.enterDataTypeDouble(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeDouble) listener.exitDataTypeDouble(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeDouble) return visitor.visitDataTypeDouble(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeFloatContext extends ParserRuleContext {
	public K_FLOAT(): TerminalNode { return this.getToken(CqlParser.K_FLOAT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeFloat; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeFloat) listener.enterDataTypeFloat(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeFloat) listener.exitDataTypeFloat(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeFloat) return visitor.visitDataTypeFloat(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeFrozenContext extends ParserRuleContext {
	public K_FROZEN(): TerminalNode { return this.getToken(CqlParser.K_FROZEN, 0); }
	public dataTypeFrozenSpec(): DataTypeFrozenSpecContext {
		return this.getRuleContext(0, DataTypeFrozenSpecContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeFrozen; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeFrozen) listener.enterDataTypeFrozen(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeFrozen) listener.exitDataTypeFrozen(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeFrozen) return visitor.visitDataTypeFrozen(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeInetContext extends ParserRuleContext {
	public K_INET(): TerminalNode { return this.getToken(CqlParser.K_INET, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeInet; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeInet) listener.enterDataTypeInet(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeInet) listener.exitDataTypeInet(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeInet) return visitor.visitDataTypeInet(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeIntContext extends ParserRuleContext {
	public K_INT(): TerminalNode { return this.getToken(CqlParser.K_INT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeInt; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeInt) listener.enterDataTypeInt(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeInt) listener.exitDataTypeInt(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeInt) return visitor.visitDataTypeInt(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeListContext extends ParserRuleContext {
	public K_LIST(): TerminalNode { return this.getToken(CqlParser.K_LIST, 0); }
	public dataTypeListSpec(): DataTypeListSpecContext {
		return this.getRuleContext(0, DataTypeListSpecContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeList; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeList) listener.enterDataTypeList(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeList) listener.exitDataTypeList(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeList) return visitor.visitDataTypeList(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeMapContext extends ParserRuleContext {
	public K_MAP(): TerminalNode { return this.getToken(CqlParser.K_MAP, 0); }
	public dataTypeMapSpec(): DataTypeMapSpecContext {
		return this.getRuleContext(0, DataTypeMapSpecContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeMap; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeMap) listener.enterDataTypeMap(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeMap) listener.exitDataTypeMap(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeMap) return visitor.visitDataTypeMap(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeSmallIntContext extends ParserRuleContext {
	public K_SMALLINT(): TerminalNode { return this.getToken(CqlParser.K_SMALLINT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeSmallInt; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeSmallInt) listener.enterDataTypeSmallInt(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeSmallInt) listener.exitDataTypeSmallInt(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeSmallInt) return visitor.visitDataTypeSmallInt(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeSetContext extends ParserRuleContext {
	public K_SET(): TerminalNode { return this.getToken(CqlParser.K_SET, 0); }
	public dataTypeSetSpec(): DataTypeSetSpecContext {
		return this.getRuleContext(0, DataTypeSetSpecContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeSet; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeSet) listener.enterDataTypeSet(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeSet) listener.exitDataTypeSet(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeSet) return visitor.visitDataTypeSet(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeTextContext extends ParserRuleContext {
	public K_TEXT(): TerminalNode { return this.getToken(CqlParser.K_TEXT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeText; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeText) listener.enterDataTypeText(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeText) listener.exitDataTypeText(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeText) return visitor.visitDataTypeText(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeTimeContext extends ParserRuleContext {
	public K_TIME(): TerminalNode { return this.getToken(CqlParser.K_TIME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeTime; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeTime) listener.enterDataTypeTime(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeTime) listener.exitDataTypeTime(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeTime) return visitor.visitDataTypeTime(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeTimeUuidContext extends ParserRuleContext {
	public K_TIMEUUID(): TerminalNode { return this.getToken(CqlParser.K_TIMEUUID, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeTimeUuid; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeTimeUuid) listener.enterDataTypeTimeUuid(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeTimeUuid) listener.exitDataTypeTimeUuid(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeTimeUuid) return visitor.visitDataTypeTimeUuid(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeTimestampContext extends ParserRuleContext {
	public K_TIMESTAMP(): TerminalNode { return this.getToken(CqlParser.K_TIMESTAMP, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeTimestamp; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeTimestamp) listener.enterDataTypeTimestamp(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeTimestamp) listener.exitDataTypeTimestamp(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeTimestamp) return visitor.visitDataTypeTimestamp(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeTinyIntContext extends ParserRuleContext {
	public K_TINYINT(): TerminalNode { return this.getToken(CqlParser.K_TINYINT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeTinyInt; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeTinyInt) listener.enterDataTypeTinyInt(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeTinyInt) listener.exitDataTypeTinyInt(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeTinyInt) return visitor.visitDataTypeTinyInt(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeTupleContext extends ParserRuleContext {
	public K_TUPLE(): TerminalNode { return this.getToken(CqlParser.K_TUPLE, 0); }
	public dataTypeTupleSpec(): DataTypeTupleSpecContext {
		return this.getRuleContext(0, DataTypeTupleSpecContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeTuple; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeTuple) listener.enterDataTypeTuple(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeTuple) listener.exitDataTypeTuple(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeTuple) return visitor.visitDataTypeTuple(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeUserDefinedContext extends ParserRuleContext {
	public OBJECT_NAME(): TerminalNode { return this.getToken(CqlParser.OBJECT_NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeUserDefined; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeUserDefined) listener.enterDataTypeUserDefined(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeUserDefined) listener.exitDataTypeUserDefined(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeUserDefined) return visitor.visitDataTypeUserDefined(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeUuidContext extends ParserRuleContext {
	public K_UUID(): TerminalNode { return this.getToken(CqlParser.K_UUID, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeUuid; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeUuid) listener.enterDataTypeUuid(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeUuid) listener.exitDataTypeUuid(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeUuid) return visitor.visitDataTypeUuid(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeVarCharContext extends ParserRuleContext {
	public K_VARCHAR(): TerminalNode { return this.getToken(CqlParser.K_VARCHAR, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeVarChar; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeVarChar) listener.enterDataTypeVarChar(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeVarChar) listener.exitDataTypeVarChar(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeVarChar) return visitor.visitDataTypeVarChar(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeVarIntContext extends ParserRuleContext {
	public K_VARINT(): TerminalNode { return this.getToken(CqlParser.K_VARINT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeVarInt; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeVarInt) listener.enterDataTypeVarInt(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeVarInt) listener.exitDataTypeVarInt(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeVarInt) return visitor.visitDataTypeVarInt(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeTupleSpecContext extends ParserRuleContext {
	public syntaxBracketLa(): SyntaxBracketLaContext {
		return this.getRuleContext(0, SyntaxBracketLaContext);
	}
	public dataType(): DataTypeContext[];
	public dataType(i: number): DataTypeContext;
	public dataType(i?: number): DataTypeContext | DataTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DataTypeContext);
		} else {
			return this.getRuleContext(i, DataTypeContext);
		}
	}
	public syntaxBracketRa(): SyntaxBracketRaContext {
		return this.getRuleContext(0, SyntaxBracketRaContext);
	}
	public syntaxComma(): SyntaxCommaContext[];
	public syntaxComma(i: number): SyntaxCommaContext;
	public syntaxComma(i?: number): SyntaxCommaContext | SyntaxCommaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SyntaxCommaContext);
		} else {
			return this.getRuleContext(i, SyntaxCommaContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeTupleSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeTupleSpec) listener.enterDataTypeTupleSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeTupleSpec) listener.exitDataTypeTupleSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeTupleSpec) return visitor.visitDataTypeTupleSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeMapSpecContext extends ParserRuleContext {
	public syntaxBracketLa(): SyntaxBracketLaContext {
		return this.getRuleContext(0, SyntaxBracketLaContext);
	}
	public dataType(): DataTypeContext[];
	public dataType(i: number): DataTypeContext;
	public dataType(i?: number): DataTypeContext | DataTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DataTypeContext);
		} else {
			return this.getRuleContext(i, DataTypeContext);
		}
	}
	public syntaxComma(): SyntaxCommaContext {
		return this.getRuleContext(0, SyntaxCommaContext);
	}
	public syntaxBracketRa(): SyntaxBracketRaContext {
		return this.getRuleContext(0, SyntaxBracketRaContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeMapSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeMapSpec) listener.enterDataTypeMapSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeMapSpec) listener.exitDataTypeMapSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeMapSpec) return visitor.visitDataTypeMapSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeListSpecContext extends ParserRuleContext {
	public syntaxBracketLa(): SyntaxBracketLaContext {
		return this.getRuleContext(0, SyntaxBracketLaContext);
	}
	public dataType(): DataTypeContext {
		return this.getRuleContext(0, DataTypeContext);
	}
	public syntaxBracketRa(): SyntaxBracketRaContext {
		return this.getRuleContext(0, SyntaxBracketRaContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeListSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeListSpec) listener.enterDataTypeListSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeListSpec) listener.exitDataTypeListSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeListSpec) return visitor.visitDataTypeListSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeSetSpecContext extends ParserRuleContext {
	public syntaxBracketLa(): SyntaxBracketLaContext {
		return this.getRuleContext(0, SyntaxBracketLaContext);
	}
	public dataType(): DataTypeContext {
		return this.getRuleContext(0, DataTypeContext);
	}
	public syntaxBracketRa(): SyntaxBracketRaContext {
		return this.getRuleContext(0, SyntaxBracketRaContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeSetSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeSetSpec) listener.enterDataTypeSetSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeSetSpec) listener.exitDataTypeSetSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeSetSpec) return visitor.visitDataTypeSetSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class DataTypeFrozenSpecContext extends ParserRuleContext {
	public syntaxBracketLa(): SyntaxBracketLaContext {
		return this.getRuleContext(0, SyntaxBracketLaContext);
	}
	public dataType(): DataTypeContext {
		return this.getRuleContext(0, DataTypeContext);
	}
	public syntaxBracketRa(): SyntaxBracketRaContext {
		return this.getRuleContext(0, SyntaxBracketRaContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_dataTypeFrozenSpec; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterDataTypeFrozenSpec) listener.enterDataTypeFrozenSpec(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitDataTypeFrozenSpec) listener.exitDataTypeFrozenSpec(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitDataTypeFrozenSpec) return visitor.visitDataTypeFrozenSpec(this);
		else return visitor.visitChildren(this);
	}
}


export class SpecialStarContext extends ParserRuleContext {
	public STAR(): TerminalNode { return this.getToken(CqlParser.STAR, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_specialStar; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSpecialStar) listener.enterSpecialStar(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSpecialStar) listener.exitSpecialStar(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSpecialStar) return visitor.visitSpecialStar(this);
		else return visitor.visitChildren(this);
	}
}


export class SpecialDotContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(CqlParser.DOT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_specialDot; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSpecialDot) listener.enterSpecialDot(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSpecialDot) listener.exitSpecialDot(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSpecialDot) return visitor.visitSpecialDot(this);
		else return visitor.visitChildren(this);
	}
}


export class EofContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(CqlParser.EOF, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_eof; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterEof) listener.enterEof(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitEof) listener.exitEof(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitEof) return visitor.visitEof(this);
		else return visitor.visitChildren(this);
	}
}


export class SyntaxBracketLrContext extends ParserRuleContext {
	public LR_BRACKET(): TerminalNode { return this.getToken(CqlParser.LR_BRACKET, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_syntaxBracketLr; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSyntaxBracketLr) listener.enterSyntaxBracketLr(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSyntaxBracketLr) listener.exitSyntaxBracketLr(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSyntaxBracketLr) return visitor.visitSyntaxBracketLr(this);
		else return visitor.visitChildren(this);
	}
}


export class SyntaxBracketRrContext extends ParserRuleContext {
	public RR_BRACKET(): TerminalNode { return this.getToken(CqlParser.RR_BRACKET, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_syntaxBracketRr; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSyntaxBracketRr) listener.enterSyntaxBracketRr(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSyntaxBracketRr) listener.exitSyntaxBracketRr(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSyntaxBracketRr) return visitor.visitSyntaxBracketRr(this);
		else return visitor.visitChildren(this);
	}
}


export class SyntaxBracketLcContext extends ParserRuleContext {
	public LC_BRACKET(): TerminalNode { return this.getToken(CqlParser.LC_BRACKET, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_syntaxBracketLc; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSyntaxBracketLc) listener.enterSyntaxBracketLc(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSyntaxBracketLc) listener.exitSyntaxBracketLc(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSyntaxBracketLc) return visitor.visitSyntaxBracketLc(this);
		else return visitor.visitChildren(this);
	}
}


export class SyntaxBracketRcContext extends ParserRuleContext {
	public RC_BRACKET(): TerminalNode { return this.getToken(CqlParser.RC_BRACKET, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_syntaxBracketRc; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSyntaxBracketRc) listener.enterSyntaxBracketRc(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSyntaxBracketRc) listener.exitSyntaxBracketRc(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSyntaxBracketRc) return visitor.visitSyntaxBracketRc(this);
		else return visitor.visitChildren(this);
	}
}


export class SyntaxBracketLaContext extends ParserRuleContext {
	public OPERATOR_LT(): TerminalNode { return this.getToken(CqlParser.OPERATOR_LT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_syntaxBracketLa; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSyntaxBracketLa) listener.enterSyntaxBracketLa(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSyntaxBracketLa) listener.exitSyntaxBracketLa(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSyntaxBracketLa) return visitor.visitSyntaxBracketLa(this);
		else return visitor.visitChildren(this);
	}
}


export class SyntaxBracketRaContext extends ParserRuleContext {
	public OPERATOR_GT(): TerminalNode { return this.getToken(CqlParser.OPERATOR_GT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_syntaxBracketRa; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSyntaxBracketRa) listener.enterSyntaxBracketRa(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSyntaxBracketRa) listener.exitSyntaxBracketRa(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSyntaxBracketRa) return visitor.visitSyntaxBracketRa(this);
		else return visitor.visitChildren(this);
	}
}


export class SyntaxBracketLsContext extends ParserRuleContext {
	public LS_BRACKET(): TerminalNode { return this.getToken(CqlParser.LS_BRACKET, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_syntaxBracketLs; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSyntaxBracketLs) listener.enterSyntaxBracketLs(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSyntaxBracketLs) listener.exitSyntaxBracketLs(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSyntaxBracketLs) return visitor.visitSyntaxBracketLs(this);
		else return visitor.visitChildren(this);
	}
}


export class SyntaxBracketRsContext extends ParserRuleContext {
	public RS_BRACKET(): TerminalNode { return this.getToken(CqlParser.RS_BRACKET, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_syntaxBracketRs; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSyntaxBracketRs) listener.enterSyntaxBracketRs(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSyntaxBracketRs) listener.exitSyntaxBracketRs(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSyntaxBracketRs) return visitor.visitSyntaxBracketRs(this);
		else return visitor.visitChildren(this);
	}
}


export class SyntaxCommaContext extends ParserRuleContext {
	public COMMA(): TerminalNode { return this.getToken(CqlParser.COMMA, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_syntaxComma; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSyntaxComma) listener.enterSyntaxComma(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSyntaxComma) listener.exitSyntaxComma(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSyntaxComma) return visitor.visitSyntaxComma(this);
		else return visitor.visitChildren(this);
	}
}


export class SyntaxColonContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(CqlParser.COLON, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_syntaxColon; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSyntaxColon) listener.enterSyntaxColon(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSyntaxColon) listener.exitSyntaxColon(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSyntaxColon) return visitor.visitSyntaxColon(this);
		else return visitor.visitChildren(this);
	}
}


export class SyntaxSquoteContext extends ParserRuleContext {
	public SQUOTE(): TerminalNode { return this.getToken(CqlParser.SQUOTE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_syntaxSquote; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSyntaxSquote) listener.enterSyntaxSquote(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSyntaxSquote) listener.exitSyntaxSquote(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSyntaxSquote) return visitor.visitSyntaxSquote(this);
		else return visitor.visitChildren(this);
	}
}


export class SyntaxDquoteContext extends ParserRuleContext {
	public DQUOTE(): TerminalNode { return this.getToken(CqlParser.DQUOTE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_syntaxDquote; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSyntaxDquote) listener.enterSyntaxDquote(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSyntaxDquote) listener.exitSyntaxDquote(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSyntaxDquote) return visitor.visitSyntaxDquote(this);
		else return visitor.visitChildren(this);
	}
}


export class SyntaxOperatorEqContext extends ParserRuleContext {
	public OPERATOR_EQ(): TerminalNode { return this.getToken(CqlParser.OPERATOR_EQ, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_syntaxOperatorEq; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSyntaxOperatorEq) listener.enterSyntaxOperatorEq(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSyntaxOperatorEq) listener.exitSyntaxOperatorEq(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSyntaxOperatorEq) return visitor.visitSyntaxOperatorEq(this);
		else return visitor.visitChildren(this);
	}
}


export class SyntaxOperatorLtContext extends ParserRuleContext {
	public OPERATOR_LT(): TerminalNode { return this.getToken(CqlParser.OPERATOR_LT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_syntaxOperatorLt; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSyntaxOperatorLt) listener.enterSyntaxOperatorLt(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSyntaxOperatorLt) listener.exitSyntaxOperatorLt(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSyntaxOperatorLt) return visitor.visitSyntaxOperatorLt(this);
		else return visitor.visitChildren(this);
	}
}


export class SyntaxOperatorGtContext extends ParserRuleContext {
	public OPERATOR_GT(): TerminalNode { return this.getToken(CqlParser.OPERATOR_GT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_syntaxOperatorGt; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSyntaxOperatorGt) listener.enterSyntaxOperatorGt(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSyntaxOperatorGt) listener.exitSyntaxOperatorGt(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSyntaxOperatorGt) return visitor.visitSyntaxOperatorGt(this);
		else return visitor.visitChildren(this);
	}
}


export class SyntaxOperatorLteContext extends ParserRuleContext {
	public OPERATOR_LTE(): TerminalNode { return this.getToken(CqlParser.OPERATOR_LTE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_syntaxOperatorLte; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSyntaxOperatorLte) listener.enterSyntaxOperatorLte(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSyntaxOperatorLte) listener.exitSyntaxOperatorLte(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSyntaxOperatorLte) return visitor.visitSyntaxOperatorLte(this);
		else return visitor.visitChildren(this);
	}
}


export class SyntaxOperatorGteContext extends ParserRuleContext {
	public OPERATOR_GTE(): TerminalNode { return this.getToken(CqlParser.OPERATOR_GTE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return CqlParser.RULE_syntaxOperatorGte; }
	@Override
	public enterRule(listener: CqlParserListener): void {
		if (listener.enterSyntaxOperatorGte) listener.enterSyntaxOperatorGte(this);
	}
	@Override
	public exitRule(listener: CqlParserListener): void {
		if (listener.exitSyntaxOperatorGte) listener.exitSyntaxOperatorGte(this);
	}
	@Override
	public accept<Result>(visitor: CqlParserVisitor<Result>): Result {
		if (visitor.visitSyntaxOperatorGte) return visitor.visitSyntaxOperatorGte(this);
		else return visitor.visitChildren(this);
	}
}

