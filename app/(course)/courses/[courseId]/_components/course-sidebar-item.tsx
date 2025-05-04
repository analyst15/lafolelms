"use client"

interface CourseSidebarItemProps {
    label: string;
    id: string;
    isCompleted: boolean;
    courseId: string;
    isLocked: boolean;
};

export const CourseSidebarItem = ({
    label,
    id,
    isCompleted,
    courseId,
    isLocked,
}: CourseSidebarItemProps) => {
    return ( 
        <div>
            Course Sidebar Item
        </div>
     );
}
 
