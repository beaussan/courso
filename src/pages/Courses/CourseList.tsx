import React from 'react';
import { useNavigate } from 'react-router';
import { PageHead } from '../../components/PageHead';
import { Button } from '../../components/Button';
import gql from 'graphql-tag';
import {
  CourseCardFragment,
  useListCoursesQuery,
} from '../../generated/graphql';
import { CardBox } from '../../components/CardBox';

gql`
  fragment CourseCard on course {
    id
    name
    years
    student_to_courses_aggregate {
      aggregate {
        count
      }
    }
  }
  query ListCourses {
    course {
      ...CourseCard
    }
  }
`;

const PromoCard: React.FC<{ data: CourseCardFragment }> = ({ data }) => {
  const navigate = useNavigate();
  return (
    <CardBox onClick={() => navigate(`./${data.id}`)}>
      <div>
        <span className="font-semibold">{data.name}</span>
        {' - '}
        <span>{data.years}</span>
      </div>
      <div className="text-gray-600">
        {data.student_to_courses_aggregate.aggregate?.count} students
      </div>
    </CardBox>
  );
};

export const CourseIndex = () => {
  const navigate = useNavigate();
  const [{ data }] = useListCoursesQuery();

  return (
    <>
      <PageHead className="mb-4">
        <div className="flex content-between justify-between items-center">
          <span>Course</span>
          <Button onClick={() => navigate('./new')}>Add new course</Button>
        </div>
      </PageHead>

      <div className="space-y-4">
        {data?.course.map((data) => (
          <PromoCard key={data.id} data={data} />
        ))}
      </div>
    </>
  );
};
