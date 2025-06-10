import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function SortableItem({ id, name }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: "8px",
    marginBottom: "4px",
    background: "#fff",
    borderRadius: "4px",
    cursor: "grab"
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {name}
    </div>
  );
}

export default function UnivSelection({ selectedUnivs, reorderUnivs }) {
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = selectedUnivs.findIndex(u => u.university === active.id);
      const newIndex = selectedUnivs.findIndex(u => u.university === over.id);
      reorderUnivs(arrayMove(selectedUnivs, oldIndex, newIndex));
    }
  };

  return (
    <div className="p-2 bg-white rounded shadow text-black">
      <h2 className="font-bold mb-2">Universités sélectionnées</h2>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={selectedUnivs.map(u => u.university)} strategy={verticalListSortingStrategy}>
          {selectedUnivs.map(u => (
            <SortableItem key={u.university} id={u.university} name={u.university} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}
