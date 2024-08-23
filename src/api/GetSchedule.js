function get_schedule() {
    
    return [
		{
			group: "ИСР-22",
			schedule: [
				{
					date: 'Понедельник, 15.06',
					classes: [
						{
							time: '1 пара — Лекция, 08:45-10:15',
							subject: 'Математика',
							teacher: 'Шертман И. Р.',
							location: '50',
							home_work: 'Какой-то текст: подготовить презентации по цилиндру и пирамиде.'
						}
					]
				}
			]
		}
	]
}

export default get_schedule