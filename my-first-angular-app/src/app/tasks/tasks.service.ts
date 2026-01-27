import { Injectable } from "@angular/core";
import { type NewTask } from "./task/task.modal";

@Injectable({providedIn: 'root'})
export class TasksService {
    private tasks = [
        {
            id: 't1',
            userId: 'u1',
            title: 'Master Angular',
            summary: 'Learn all the basic and advanced features of Angular & how to apply them',
            dueDate: '2025-12-31'
        },
        {
            id: 't2',
            userId: 'u2',
            title: 'Build first Angular App',
            summary: 'Learn all the basic and advanced features of Angular & how to apply them',
            dueDate: '2025-12-31'
        },
        {
            id: 't3',
            userId: 'u3',
            title: 'Add UI Library',
            summary: 'Learn all the basic and advanced features of Angular & how to apply them',
            dueDate: '2025-12-31'
        },
        {
            id: 't4',
            userId: 'u4',
            title: 'Interactive with backend',
            summary: 'Learn all the basic and advanced features of Angular & how to apply them',
            dueDate: '2025-12-31'
        }, {
            id: 't5',
            userId: 'u5',
            title: 'Write Test',
            summary: 'Learn all the basic and advanced features of Angular & how to apply them',
            dueDate: '2025-12-31'
        }, {
            id: 't6',
            userId: 'u6',
            title: 'Deploy frontend app to Azure Cloud',
            summary: 'Learn all the basic and advanced features of Angular & how to apply them',
            dueDate: '2025-12-31'
        }
    ];

    getUserTasks(userId: string) {
        return this.tasks.filter((task) => task.userId === userId);
    }

    addTask(taskData: NewTask, userId: string) {
        this.tasks.push({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.dueDate
        })
    }

    removeTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }
}