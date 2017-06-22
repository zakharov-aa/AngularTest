﻿1. В: Как в VS делать комментарии к функциям?
    О : Над методом/ функцией написать '/**'.Над полями и классани не работает.
Пример в User.sum();

2. В: TS let vs var?
    О: var доступна внутри ближайшего блока function() { }. 
let доступна внутри блока скобок (например, внутри цикла for() { }).
let нельзя использовать до объясления (var поднимает объсявление в начало блока function() { })

3. В: Приведение типов в TS.
    О: 2 варианта:
var circle = <Circle>createShape("circle");
var circle = createShape("circle") as Circle;
Приведение типов (Type Assertions) осуществляется во время компиляции, а не во время исполнения.
    https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#416-type-assertions
Чтобы не обосраться, нужно предварительно проверять, что пришло и чем оно является:
var shape = createShape(shapeKind);
if (shape instanceof Circle) {  //Проверка, что у нас тот самый тип
    var circle = <Circle>shape;  
    ...  
}
Работают одинкого.Сперва появился 1ый. 
2 добавили в TS 1.6, чтобы избежать конфликта с какой то дристней в JSX 
    (Синтаксический сахар для React https://habrahabr.ru/post/319270/)

    4. В: Проверка типов instanceof vs typeof.
        О: instanceof - для своих типов, typeof для простых встроенных типов.
        https://stackoverflow.com/questions/899574/which-is-best-to-use-typeof-or-instanceof

