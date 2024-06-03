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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const classes_entity_1 = require("./classes.entity");
const teachers_entity_1 = require("../teachers/teachers.entity");
const students_entity_1 = require("../students/students.entity");
let ClassesService = class ClassesService {
    constructor(classesRepository, teachersRepository, studentsRepository) {
        this.classesRepository = classesRepository;
        this.teachersRepository = teachersRepository;
        this.studentsRepository = studentsRepository;
    }
    async create(createClassDto) {
        const { teacherId, studentIds } = createClassDto, classData = __rest(createClassDto, ["teacherId", "studentIds"]);
        const teacher = await this.teachersRepository.findOne({ where: { id: teacherId } });
        if (!teacher) {
            throw new common_1.NotFoundException(`Teacher with ID ${teacherId} not found`);
        }
        const students = await this.studentsRepository.findBy({ id: (0, typeorm_2.In)(studentIds) });
        if (students.length !== studentIds.length) {
            throw new common_1.NotFoundException(`Some students not found`);
        }
        const newClass = this.classesRepository.create(Object.assign(Object.assign({}, classData), { teacher, students }));
        return this.classesRepository.save(newClass);
    }
    async findAll() {
        return this.classesRepository.find({ relations: ['teacher', 'students'] });
    }
    async findOne(id) {
        return this.classesRepository.findOne({ where: { id }, relations: ['teacher', 'students'] });
    }
    async assignTeacher(id, assignTeacherDto) {
        const { teacherId } = assignTeacherDto;
        const classEntity = await this.classesRepository.findOne({ where: { id }, relations: ['teacher', 'students'] });
        if (!classEntity) {
            throw new common_1.NotFoundException(`Class with ID ${id} not found`);
        }
        const teacher = await this.teachersRepository.findOne({ where: { id: teacherId } });
        if (!teacher) {
            throw new common_1.NotFoundException(`Teacher with ID ${teacherId} not found`);
        }
        classEntity.teacher = teacher;
        return this.classesRepository.save(classEntity);
    }
    async assignStudents(id, assignStudentsDto) {
        const { studentIds } = assignStudentsDto;
        const classEntity = await this.classesRepository.findOne({ where: { id }, relations: ['teacher', 'students'] });
        if (!classEntity) {
            throw new common_1.NotFoundException(`Class with ID ${id} not found`);
        }
        const students = await this.studentsRepository.findBy({ id: (0, typeorm_2.In)(studentIds) });
        if (students.length !== studentIds.length) {
            throw new common_1.NotFoundException(`One or more students not found`);
        }
        classEntity.students = [...classEntity.students, ...students];
        return this.classesRepository.save(classEntity);
    }
    async remove(id) {
        const classEntity = await this.classesRepository.findOne({ where: { id } });
        if (!classEntity) {
            throw new common_1.NotFoundException(`Class with ID ${id} not found`);
        }
        await this.classesRepository.remove(classEntity);
    }
};
exports.ClassesService = ClassesService;
exports.ClassesService = ClassesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(classes_entity_1.Class)),
    __param(1, (0, typeorm_1.InjectRepository)(teachers_entity_1.Teacher)),
    __param(2, (0, typeorm_1.InjectRepository)(students_entity_1.Student)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ClassesService);
//# sourceMappingURL=classses.service.js.map