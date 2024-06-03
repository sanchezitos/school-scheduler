"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const classses_service_1 = require("./classses.service");
const classes_controller_1 = require("./classes.controller");
const classes_entity_1 = require("./classes.entity");
const teachers_entity_1 = require("../teachers/teachers.entity");
const students_entity_1 = require("../students/students.entity");
const teachers_module_1 = require("../teachers/teachers.module");
const students_module_1 = require("../students/students.module");
let ClassesModule = class ClassesModule {
};
exports.ClassesModule = ClassesModule;
exports.ClassesModule = ClassesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([classes_entity_1.Class, teachers_entity_1.Teacher, students_entity_1.Student]),
            teachers_module_1.TeachersModule,
            students_module_1.StudentsModule,
        ],
        providers: [classses_service_1.ClassesService],
        controllers: [classes_controller_1.ClassesController],
    })
], ClassesModule);
//# sourceMappingURL=classses.module.js.map