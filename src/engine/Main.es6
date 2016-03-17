import  ExecutionContext from './ExecutionContext.es6';
import  ScriptEngine from './ScriptEngine.es6';
import  Realm from './Realm.es6';

const globalContext = new ExecutionContext(null);

const scriptEngine = new ScriptEngine(globalContext, Realm);

const __main__ = scriptEngine.DefineFunction({
    Name: '__main__',
    Parameters:[],
    SourceCode:`

        var prefix = "Hi";

        var User = function(name) {

            this.name = name;
        }

        User.prototype.greeting = function(){ return prefix + ', ' + this.name};

        var user = new User('John');

        return user.greeting();
    `
    ,
    CompliledBody: function ($) {

        $.AssignVariable('prefix', 'Hi');

        $.AssignVariable('User', $.DefineFunction(/*...*/));

        $.AssignVariable('User.Prototype.greeting', $.DefineFunction(/*...*/));

        $.AssignVariable('user', $.NewObject($.GetValue('User'), ['John']));

        $.ExitFunctionWithResult( $.ApplyFunction($.GetValue('user.greeting'), $.GetValue('user'), []));
    }
});

scriptEngine.ApplyFunction(__main__, globalContext, []);