import type { TaskCardProps } from "../libs/Todolist";
export default function TaskCard(props: TaskCardProps) {
  if (props.isDone === true) {
    <h5 className="text-decoration-line-through"></h5>;
  }
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-lg-8">
            {props.isDone === true ? (
              <h5 className="card-title m-0 text-decoration-line-through">
                {props.title}
              </h5>
            ) : (
              <h5 className="card-title m-0 ">{props.title}</h5>
            )}
          </div>
          <div className="col-lg-2">
            <button className="btn btn-success w-100">Done</button>
          </div>
          <div className="col-lg-2">
            <button className="btn btn-danger w-100">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
