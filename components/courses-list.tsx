import { Category, Course } from "@prisma/client";

type CoursesWithProgressWithCategory = Course & {
    category: Category | null;
    chapters: { id: string }[];
    progress: number | null;
};

interface CoursesListProps {
    items: CoursesWithProgressWithCategory[];
}

export const CoursesList = ({
    items,
}: CoursesListProps) => {
    return (
        <div>
            {items.map((item) => (
                <div key={item.id}>
                    {item.title}
                </div>
            ))}
        </div>
    )
}