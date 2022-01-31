import { Employee } from "./Employee";
import { Status } from "./Status";
import { Engagement } from "./Engagement";

export interface Allocations {
  // structure
  employee: Employee[]
  status: Status[]
  engagements: Engagement []
}

/**
 * 'Kwabena Ampofo', 'Kwaku Manu', 'Yaw Annan', 'Araba Atiga',
 *     'Ofosu-Hene Twumasi', 'Dzakpasu Alorgoze', 'Yofi Nkrumah', 'Alhassan Ayariga',
 */
