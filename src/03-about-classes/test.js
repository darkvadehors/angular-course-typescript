"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
var expect = chai.expect;
describe('about classes', function () {
    function applyMixins(derivedCtor, baseCtors) {
        baseCtors.forEach(function (baseCtor) { return Object
            .getOwnPropertyNames(baseCtor.prototype)
            .forEach(function (name) { return derivedCtor.prototype[name] = baseCtor.prototype[name]; }); });
    }
    it('1-your first class', function () {
        var SuperHero = /** @class */ (function () {
            function SuperHero() {
            }
            return SuperHero;
        }()); // _
        var hero = new SuperHero('Bruce', 'Wayne');
        expect(hero.talk()).to.equal('My favourite saying is : Hi my name is Bruce Wayne');
    });
    it('2-you can use getter and setters', function () {
        var Person = /** @class */ (function () {
            function Person() {
            }
            return Person;
        }()); // _
        var person = new Person('John', 'Doe');
        expect(person.fullName).to.equal('John Doe');
        person.fullName = 'Jane Doe';
        expect(person.fullName).to.equal('Jane Doe');
    });
    it('3-implement an interface', function () {
        var Developer = /** @class */ (function () {
            function Developer() {
            }
            return Developer;
        }()); // _
        var developer = new Developer('TypeScript');
        expect(developer.sayHi()).to.equal('Hello my favourite language is TypeScript');
    });
    it('4-extend an other class', function () {
        var SuperHero = /** @class */ (function () {
            function SuperHero(name, ability) {
                this.name = name;
                this.ability = ability;
            }
            SuperHero.prototype.talk = function () {
                return "I fight against evil with " + this.ability;
            };
            return SuperHero;
        }());
        var Sidekick = /** @class */ (function () {
            function Sidekick() {
            }
            return Sidekick;
        }()); // _
        var batman = new SuperHero('Batman', 'Martial arts');
        var robin = new Sidekick('Robin', 'Stick', batman);
        expect(robin.talk()).to.equal('I fight against evil with Stick and my master is Batman');
    });
    it('5-share methods like in pure JS', function () {
        var Developer = /** @class */ (function () {
            function Developer(favouriteLanguage) {
                this.favouriteLanguage = favouriteLanguage;
            }
            Developer.prototype.sayHi = function () {
                return "Hello my favourite language is " + this.favouriteLanguage;
            };
            return Developer;
        }());
        var developer = new Developer('JavaScript');
        expect(developer.sayHi.call(_))
            .to.equal('Hello my favourite language is TypeScript');
    });
    it('6-mix it', function () {
        var BackDeveloper = /** @class */ (function () {
            function BackDeveloper() {
            }
            BackDeveloper.prototype.writeCSharp = function () {
                return true;
            };
            BackDeveloper.languages = ['CSharp'];
            return BackDeveloper;
        }());
        var FrontDeveloper = /** @class */ (function () {
            function FrontDeveloper() {
            }
            FrontDeveloper.prototype.writeTypeScript = function () {
                return true;
            };
            FrontDeveloper.prototype.writeJavaScript = function () {
                return true;
            };
            FrontDeveloper.languages = ['JavaScript', 'TypeScript'];
            return FrontDeveloper;
        }());
        var FullStackDeveloper = /** @class */ (function () {
            function FullStackDeveloper() {
            }
            return FullStackDeveloper;
        }()); // _
        var developer = new FullStackDeveloper();
        expect(developer.talk())
            .to.equal('Hello I\'m a FullStackDeveloper and I know CSharp and JavaScript and TypeScript');
        expect(developer.talk.call(new BackDeveloper()))
            .to.equal('Hello I\'m a BackDeveloper and I know CSharp');
        expect(developer.talk.call(new FrontDeveloper()))
            .to.equal('Hello I\'m a FrontDeveloper and I know JavaScript and TypeScript');
    });
});
//# sourceMappingURL=test.js.map