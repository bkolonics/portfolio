import photo from '../assets/photo.jpg';

export function Description() {
    return (
      <>
        <div className="flex justify-evenly">
          <div className="flex bg-Columbia-blue h-80 w-80 p-4 rounded-3xl items-center">
            <img className="rounded-2xl" src={photo} />
          </div>
          <div className="flex h-32 w-32 p-4 items-center justify-center">
            <p>test2</p>
          </div>
        </div>
      </>
    );
}