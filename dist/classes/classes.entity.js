"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Class = void 0;
const typeorm_1 = require("typeorm");
const teachers_entity_1 = require("../teachers/teachers.entity");
const students_entity_1 = require("../students/students.entity");
let Class = class Class {
};
exports.Class = Class;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Class.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Class.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Class.prototype, "subject", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => teachers_entity_1.Teacher, teacher => teacher.classes),
    __metadata("design:type", teachers_entity_1.Teacher)
], Class.prototype, "teacher", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => students_entity_1.Student, student => student.classes),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Class.prototype, "students", void 0);
exports.Class = Class = __decorate([
    (0, typeorm_1.Entity)()
], Class);
//# sourceMappingURL=classes.entity.js.map