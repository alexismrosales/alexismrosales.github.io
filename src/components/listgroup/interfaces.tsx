import { ProjectsI } from "../../data/Projects";
import { ProgramsI } from "../../data/Programs";
import { Project } from "../../data/Projects"
import { Program } from "../../data/Programs"

export interface ListGroupsProps {
    type: "Project" | "Program"
}

export interface ItemsData {
    id: string
    elements: ProjectsI | ProgramsI
    type: "Project" | "Program"
}
export interface ItemData {
    title: String
    element: Project | Program
    type: "Project" | "Program"
}

export interface TagsData {
    elementssize: number
    tags: Map<string, number>
}
export interface TagData {
    id: string
    label: string
    total: number
}
