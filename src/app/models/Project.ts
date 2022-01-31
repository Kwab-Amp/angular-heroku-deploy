import { Status } from "./Status";

export interface Project {
  name: string
  developer_count: number
  project_type: string
  status: Status
}
