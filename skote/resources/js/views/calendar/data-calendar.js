const categories = [
    {
        name: 'Danger',
        value: 'bg-danger'
    },
    {
        name: 'Success',
        value: 'bg-success'
    },
    {
        name: 'Primary',
        value: 'bg-primary'
    },
    {
        name: 'Info',
        value: 'bg-info'
    },
    {
        name: 'Dark',
        value: 'bg-dark'
    },
    {
        name: 'Warning',
        value: 'bg-warning'
    },
];

const calendarEvents = [
    {
        id: 1,
        title: 'Hey!',
        start: new Date().setDate(new Date().getDate() + 2),
        className: 'bg-warning',
    },
    {
        id: 2,
        title: 'See John Deo',
        start: new Date(),
        end: new Date(),
        className: 'bg-success',
    },
    {
        id: 3,
        title: 'Meet John Deo',
        start: new Date().setDate(new Date().getDate() + 2),
        className: 'bg-info',
    },
    {
        id: 4,
        title: 'Buy a Theme',
        start: new Date().setDate(new Date().getDate() + 4),
        className: 'bg-primary'
    }
];

export { categories, calendarEvents };
