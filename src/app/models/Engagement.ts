import { Status } from "./Status";
import { Contract } from "./Contract";
import { Project } from "./Project";

export interface Engagement {
  contract: Contract
  project: Project
  start_date: Date
  end_date: Date
  status: Status
}
