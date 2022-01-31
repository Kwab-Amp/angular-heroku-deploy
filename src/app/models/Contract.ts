import {Client} from "./Client";

export interface Contract {
  client: Client
  start_date: Date
  end_date: Date
  developer_count: number
  aob_notes: string
}
