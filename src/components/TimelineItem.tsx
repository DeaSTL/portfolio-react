type Props = {
  year:string,
  body:string
}

export default function TimelineItem({year,body}: Props) {
  return (
    <div className="pb-10 flex md:flex-row flex-col">
      <div className="text-3xl md:p-4">
        {year}
      </div>
      <span>
        <p>
          {body}
        </p>
      </span>
    </div>
  )
}
