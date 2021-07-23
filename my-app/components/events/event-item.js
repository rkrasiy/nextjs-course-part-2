import LinkWrapper from "../linkwrapper/linkwrapper"
import classes from "./event-item.module.css"

function EventItem ( props ) {

  const { title, image, date, location, id } = props;

  const simpleDate = new Date (date).toLocaleDateString("en-US",{
    day: 'numeric',
    month: "long",
    year: "numeric"
  })

  const simpleAddress = location.replace(", ", "\n");
  const exporeLink = "/events/" + id;

  return <li className={classes.item}>
          <LinkWrapper href={exporeLink} className={classes.wrapper} >
            <div className={classes.image}>
              <img src={image} alt={title} />
            </div>
            <div className={classes.content}>
              <h2>{title}</h2>
              <div className={classes.date}>
                <time>{simpleDate}</time>
              </div>
              <div className={classes.address}>
                <address>{simpleAddress}</address>
              </div>
            </div>
          </LinkWrapper>
        </li>
}

export default EventItem;