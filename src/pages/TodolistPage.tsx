import Header from "../components/Header.tsx";
import Sidebar from "../components/Sidebar.tsx";
import TaskInput from "../components/TaskInput.tsx";
import TaskCard from "../components/TaskCard.tsx";
import Footer from "../components/Footer.tsx";
export default function TodolistPage() {
  return (
    <div className="container-fluid min-vh-100">
      <div className="row h-100">
        {/* ── 2) Sidebar (รับ props userName, type) ─────────────────────────── */}
        <Sidebar username={"Thammasorn"} type={"student"}></Sidebar>

        <div className="col-10 p-0 d-flex flex-column min-vh-100">
          {/* ── 1) Header (ไม่รับ props) ────────────────────────────────────── */}
          <Header></Header>

          <main className="flex-grow-1 p-4">
            <div className="container">
              <h2 className="text-center">Todo List</h2>

              {/* ── 3) TaskInput (ไม่รับ props) ──────────────────────────── */}
              <TaskInput></TaskInput>

              {/* ── 4) Task (3 แถว) → แยกเป็น <TaskCard /> แล้ว .map() ─────── */}
              <TaskCard
                id={"1"}
                title={"Read a book"}
                description={"Vite + React + Bootstrap + TS"}
                isDone={false}
              ></TaskCard>
              <TaskCard
                id={"2"}
                title={"Write code"}
                description={"Finish project for class"}
                isDone={false}
              ></TaskCard>
              <TaskCard
                id={"3"}
                title={"Deploy app"}
                description={"Push project to GitHub Pages"}
                isDone={true}
              ></TaskCard>
            </div>
          </main>

          {/* ── 5) Footer (รับ props year, fullName, studentId) ─────────────── */}
          <Footer
            year={2026}
            fullName={"Thammasorn Meethiang"}
            studentId={"680610682"}
          ></Footer>
        </div>
      </div>
    </div>
  );
}
