import Card from './UI/Card';

const Team = () => {
  const members = [
    {
      name: 'Shivam',
      src: 'https://avatars.githubusercontent.com/u/52779730?v=4',
    },
    {
      name: 'Kartik',
      src: 'https://avatars.githubusercontent.com/u/60486289?v=4',
    },
    {
      name: 'Faraz',
      src: 'https://avatars.githubusercontent.com/u/53421337?v=4',
    },
  ];

  return (
    <div className='flex justify-evenly'>
      {members.map((member) => (
        <Card
          key={member.name}
          src={member.src}
          alt={member.name}
          name={member.name}
        />
      ))}
    </div>
  );
};

export default Team;
