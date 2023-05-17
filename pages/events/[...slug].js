import { Fragment } from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

function FilterEventsPage() {
  const router = useRouter();

  // 라우터는 컴포넌트가 첫 번째 렌더링을 마친 후 실행된다.
  // 컴포넌트가 처음 렌더링될 때는 해당 URL 데이터에 대한 엑세스가 없다.
  // 최초로 렌더링되었을 때는 filterData가 undefined.
  const filterData = router.query.slug;

  if (!filterData) {
    // className이 문자열인 이유는 globals.css파일에 정의된 CSS클래스이기 때문이다.
    return <p className="center">Loading...</p>;
  }

  const filterdYear = filterData[0];
  const filterdMonth = filterData[1];

  const numYear = +filterdYear;
  const numMonth = +filterdMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid Filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default FilterEventsPage;

// slug페이지는 필터 값을 읽고 해당 URL로부터 올바른 이벤트를 찾아낸다.
