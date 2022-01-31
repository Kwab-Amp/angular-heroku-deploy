import {Allocations} from "./Allocations";
import {Status} from "./Status";

export const MockAllocations: Allocations[] = [
  {
    employee: [
      {
        first_name: 'Kwabena',
        last_name: 'Ampofo',
        other_names: 'Amo',
        email: 'kwabena.ampofo@turntabl.io',
        enroll_date: new Date(1994, 5, 10),
        image_url: 'someurl.com'
      },
      {
        first_name: 'Kwaku',
        last_name: 'Manu',
        other_names: '',
        email: 'kwaku.manu@turntabl.io',
        enroll_date: new Date(1987, 5, 10),
        image_url: 'someurl.com'
      },
      {
        first_name: 'Yaw',
        last_name: 'Annan',
        other_names: '',
        email: 'yaw.annan@turntabl.io',
        enroll_date: new Date(1960, 5, 10),
        image_url: 'someurl.com'
      },
      {
        first_name: 'Araba',
        last_name: 'Attiga',
        other_names: '',
        email: 'araba.attiga@turntabl.io',
        enroll_date: new Date(1950, 5, 10),
        image_url: 'someurl.com'
      }
    ],
    status: [
      Status.COMPLETED,
      Status.PROVISIONAL,
      Status.IN_PROGRESS
    ],
    engagements: [
      {
        contract: {
            client: { name: "Ofosu and Sons", email: "ofosu-sons@example.com"},
          start_date: new Date(1992, 10, 1),
          end_date: new Date(2023, 12, 31),
          developer_count: 62,
          aob_notes: "Some Notes"
        },
        project: {
          name: "Virtual Farming",
          developer_count: 12,
          project_type: "Client",
          status: Status.IN_PROGRESS
        },
        start_date: new Date(),
        end_date: new Date(),
        status: Status.IN_PROGRESS
      }
    ]
  }
]
