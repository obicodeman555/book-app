import React, { useState } from "react";
import "./bookDetails.scss";
import {
  Header,
  UserFeedBack,
  GoBackLink,
  LargeCartButton,
  Cart,
} from "components";
import bigMagicCover from "assets/img/big-magic-cover_euc3rh.jpg";

const BookDetails = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  // const homeElement = useRef();

  const showCartHandler = () => {
    setIsCartOpen(!isCartOpen);

    console.log(isCartOpen);
  };

  return (
    <div className="bookItem__details">
      <Header cartHandler={showCartHandler} />
      <Cart isCartOpen={isCartOpen} showCartHandler={showCartHandler} />
      <article className="bookItem__info">
        <section className="bookItem__tradeInfo">
          <div className="">
            <GoBackLink linkText="Back" />
            <figure>
              <img src={bigMagicCover} alt="big-magic-cover" />
              <figcaption>
                <span className="color-green availability__copy">
                  23 Copies Available
                </span>
                <span className="book__price">$29.99</span>
                <LargeCartButton buttonText="Add to Cart" />
              </figcaption>
            </figure>
          </div>
        </section>
        <div className="bookItem__tradeInfo__text">
          <section>
            <h1>Big Magic: Creative Living Beyond Fear</h1>
            <div className="author mb-md">
              <span className="label">Elizabeth Gilbert</span>
              <span className="md-font-size mt-md">2016</span>
            </div>

            <div className="table-format">
              <UserFeedBack />
              <div className="field">
                <span className="label">Genre</span>
                <span className="md-font-size mt-md">Motivational</span>
              </div>
              <div className="field">
                <span className="label">Tags</span>
                <span className="md-font-size mt-md">
                  Creativity, Better Living
                </span>
              </div>
              <div className="field">
                <span className="label">Publisher</span>
                <span className="md-font-size mt-md">Savannah Books</span>
              </div>
              <div className="field">
                <span className="label">Released</span>
                <span className="md-font-size mt-md">21 January, 2016</span>
              </div>
            </div>
            <div className="book__foreword">
              <h3>The instant #1 NEW YORK TIMES Bestseller</h3>
              <p>
                "A must read for anyone hoping to live a creative life... I dare
                you not to be inspired to be brave, to be free, and to be
                curious." -PopSugar
              </p>
              <p>
                From the worldwide bestselling author of{" "}
                <strong>Eat Pray Love</strong> and{" "}
                <strong>
                  City of Girls: the path to the vibrant, fulfilling life you've
                  dreamed of
                </strong>
                .
              </p>
              <p>
                Readers of all ages and walks of life have drawn inspiration and
                empowerment from Elizabeth Gilbert's books for years. Now this
                beloved author digs deep into her own generative process to
                share her wisdom and unique perspective about creativity. With
                profound empathy and radiant generosity, she offers potent
                insights into the mysterious nature of inspiration. She asks us
                to embrace our curiosity and let go of needless suffering. She
                shows us how to tackle what we most love, and how to face down
                what we most fear. She discusses the attitudes, approaches, and
                habits we need in order to live our most creative lives.
                Balancing between soulful spirituality and cheerful pragmatism,
                Gilbert encourages us to uncover the "strange jewels" that are
                hidden within each of us. Whether we are looking to write a
                book, make art, find new ways to address challenges in our work,
                embark on a dream long deferred, or simply infuse our everyday
                lives with more mindfulness and passion, Big Magic cracks open a
                world of wonder and joy.
              </p>
              <p>
                "A must read for anyone hoping to live a creative life... I dare
                you not to be inspired to be brave, to be free, and to be
                curious." -PopSugar
              </p>
              <p>
                From the worldwide bestselling author of{" "}
                <strong>Eat Pray Love</strong> and{" "}
                <strong>
                  City of Girls: the path to the vibrant, fulfilling life you've
                  dreamed of
                </strong>
              </p>
              <p>
                Readers of all ages and walks of life have drawn inspiration and
                empowerment from Elizabeth Gilbert's books for years. Now this
                beloved author digs deep into her own generative process to
                share her wisdom and unique perspective about creativity. With
                profound empathy and radiant generosity, she offers potent
                insights into the mysterious nature of inspiration. She asks us
                to embrace our curiosity and let go of needless suffering. She
                shows us how to tackle what we most love, and how to face down
                what we most fear. She discusses the attitudes, approaches, and
                habits we need in order to live our most creative lives.
                Balancing between soulful spirituality and cheerful pragmatism,
                Gilbert encourages us to uncover the "strange jewels" that are
                hidden within each of us. Whether we are looking to write a
                book, make art, find new ways to address challenges in our work,
                embark on a dream long deferred, or simply infuse our everyday
                lives with more mindfulness and passion, Big Magic cracks open a
                world of wonder and joy.
              </p>
              <p>
                Readers of all ages and walks of life have drawn inspiration and
                empowerment from Elizabeth Gilbert's books for years. Now this
                beloved author digs deep into her own generative process to
                share her wisdom and unique perspective about creativity. With
                profound empathy and radiant generosity, she offers potent
                insights into the mysterious nature of inspiration. She asks us
                to embrace our curiosity and let go of needless suffering. She
                shows us how to tackle what we most love, and how to face down
                what we most fear. She discusses the attitudes, approaches, and
                habits we need in order to live our most creative lives.
                Balancing between soulful spirituality and cheerful pragmatism,
                Gilbert encourages us to uncover the "strange jewels" that are
                hidden within each of us. Whether we are looking to write a
                book, make art, find new ways to address challenges in our work,
                embark on a dream long deferred, or simply infuse our everyday
                lives with more mindfulness and passion, Big Magic cracks open a
                world of wonder and joy.
              </p>
              <p>
                Readers of all ages and walks of life have drawn inspiration and
                empowerment from Elizabeth Gilbert's books for years. Now this
                beloved author digs deep into her own generative process to
                share her wisdom and unique perspective about creativity. With
                profound empathy and radiant generosity, she offers potent
                insights into the mysterious nature of inspiration. She asks us
                to embrace our curiosity and let go of needless suffering. She
                shows us how to tackle what we most love, and how to face down
                what we most fear. She discusses the attitudes, approaches, and
                habits we need in order to live our most creative lives.
                Balancing between soulful spirituality and cheerful pragmatism,
                Gilbert encourages us to uncover the "strange jewels" that are
                hidden within each of us. Whether we are looking to write a
                book, make art, find new ways to address challenges in our work,
                embark on a dream long deferred, or simply infuse our everyday
                lives with more mindfulness and passion, Big Magic cracks open a
                world of wonder and joy.
              </p>
              <p>
                Readers of all ages and walks of life have drawn inspiration and
                empowerment from Elizabeth Gilbert's books for years. Now this
                beloved author digs deep into her own generative process to
                share her wisdom and unique perspective about creativity. With
                profound empathy and radiant generosity, she offers potent
                insights into the mysterious nature of inspiration. She asks us
                to embrace our curiosity and let go of needless suffering. She
                shows us how to tackle what we most love, and how to face down
                what we most fear. She discusses the attitudes, approaches, and
                habits we need in order to live our most creative lives.
                Balancing between soulful spirituality and cheerful pragmatism,
                Gilbert encourages us to uncover the "strange jewels" that are
                hidden within each of us. Whether we are looking to write a
                book, make art, find new ways to address challenges in our work,
                embark on a dream long deferred, or simply infuse our everyday
                lives with more mindfulness and passion, Big Magic cracks open a
                world of wonder and joy.
              </p>
              <p>
                Readers of all ages and walks of life have drawn inspiration and
                empowerment from Elizabeth Gilbert's books for years. Now this
                beloved author digs deep into her own generative process to
                share her wisdom and unique perspective about creativity. With
                profound empathy and radiant generosity, she offers potent
                insights into the mysterious nature of inspiration. She asks us
                to embrace our curiosity and let go of needless suffering. She
                shows us how to tackle what we most love, and how to face down
                what we most fear. She discusses the attitudes, approaches, and
                habits we need in order to live our most creative lives.
                Balancing between soulful spirituality and cheerful pragmatism,
                Gilbert encourages us to uncover the "strange jewels" that are
                hidden within each of us. Whether we are looking to write a
                book, make art, find new ways to address challenges in our work,
                embark on a dream long deferred, or simply infuse our everyday
                lives with more mindfulness and passion, Big Magic cracks open a
                world of wonder and joy.
              </p>
              <p>
                Readers of all ages and walks of life have drawn inspiration and
                empowerment from Elizabeth Gilbert's books for years. Now this
                beloved author digs deep into her own generative process to
                share her wisdom and unique perspective about creativity. With
                profound empathy and radiant generosity, she offers potent
                insights into the mysterious nature of inspiration. She asks us
                to embrace our curiosity and let go of needless suffering. She
                shows us how to tackle what we most love, and how to face down
                what we most fear. She discusses the attitudes, approaches, and
                habits we need in order to live our most creative lives.
                Balancing between soulful spirituality and cheerful pragmatism,
                Gilbert encourages us to uncover the "strange jewels" that are
                hidden within each of us. Whether we are looking to write a
                book, make art, find new ways to address challenges in our work,
                embark on a dream long deferred, or simply infuse our everyday
                lives with more mindfulness and passion, Big Magic cracks open a
                world of wonder and joy.
              </p>
              <p>
                Readers of all ages and walks of life have drawn inspiration and
                empowerment from Elizabeth Gilbert's books for years. Now this
                beloved author digs deep into her own generative process to
                share her wisdom and unique perspective about creativity. With
                profound empathy and radiant generosity, she offers potent
                insights into the mysterious nature of inspiration. She asks us
                to embrace our curiosity and let go of needless suffering. She
                shows us how to tackle what we most love, and how to face down
                what we most fear. She discusses the attitudes, approaches, and
                habits we need in order to live our most creative lives.
                Balancing between soulful spirituality and cheerful pragmatism,
                Gilbert encourages us to uncover the "strange jewels" that are
                hidden within each of us. Whether we are looking to write a
                book, make art, find new ways to address challenges in our work,
                embark on a dream long deferred, or simply infuse our everyday
                lives with more mindfulness and passion, Big Magic cracks open a
                world of wonder and joy.
              </p>
              <p>
                Readers of all ages and walks of life have drawn inspiration and
                empowerment from Elizabeth Gilbert's books for years. Now this
                beloved author digs deep into her own generative process to
                share her wisdom and unique perspective about creativity. With
                profound empathy and radiant generosity, she offers potent
                insights into the mysterious nature of inspiration. She asks us
                to embrace our curiosity and let go of needless suffering. She
                shows us how to tackle what we most love, and how to face down
                what we most fear. She discusses the attitudes, approaches, and
                habits we need in order to live our most creative lives.
                Balancing between soulful spirituality and cheerful pragmatism,
                Gilbert encourages us to uncover the "strange jewels" that are
                hidden within each of us. Whether we are looking to write a
                book, make art, find new ways to address challenges in our work,
                embark on a dream long deferred, or simply infuse our everyday
                lives with more mindfulness and passion, Big Magic cracks open a
                world of wonder and joy.
              </p>
              <p>
                Readers of all ages and walks of life have drawn inspiration and
                empowerment from Elizabeth Gilbert's books for years. Now this
                beloved author digs deep into her own generative process to
                share her wisdom and unique perspective about creativity. With
                profound empathy and radiant generosity, she offers potent
                insights into the mysterious nature of inspiration. She asks us
                to embrace our curiosity and let go of needless suffering. She
                shows us how to tackle what we most love, and how to face down
                what we most fear. She discusses the attitudes, approaches, and
                habits we need in order to live our most creative lives.
                Balancing between soulful spirituality and cheerful pragmatism,
                Gilbert encourages us to uncover the "strange jewels" that are
                hidden within each of us. Whether we are looking to write a
                book, make art, find new ways to address challenges in our work,
                embark on a dream long deferred, or simply infuse our everyday
                lives with more mindfulness and passion, Big Magic cracks open a
                world of wonder and joy.
              </p>
              <p>
                Readers of all ages and walks of life have drawn inspiration and
                empowerment from Elizabeth Gilbert's books for years. Now this
                beloved author digs deep into her own generative process to
                share her wisdom and unique perspective about creativity. With
                profound empathy and radiant generosity, she offers potent
                insights into the mysterious nature of inspiration. She asks us
                to embrace our curiosity and let go of needless suffering. She
                shows us how to tackle what we most love, and how to face down
                what we most fear. She discusses the attitudes, approaches, and
                habits we need in order to live our most creative lives.
                Balancing between soulful spirituality and cheerful pragmatism,
                Gilbert encourages us to uncover the "strange jewels" that are
                hidden within each of us. Whether we are looking to write a
                book, make art, find new ways to address challenges in our work,
                embark on a dream long deferred, or simply infuse our everyday
                lives with more mindfulness and passion, Big Magic cracks open a
                world of wonder and joy.
              </p>{" "}
              <p>
                Readers of all ages and walks of life have drawn inspiration and
                empowerment from Elizabeth Gilbert's books for years. Now this
                beloved author digs deep into her own generative process to
                share her wisdom and unique perspective about creativity. With
                profound empathy and radiant generosity, she offers potent
                insights into the mysterious nature of inspiration. She asks us
                to embrace our curiosity and let go of needless suffering. She
                shows us how to tackle what we most love, and how to face down
                what we most fear. She discusses the attitudes, approaches, and
                habits we need in order to live our most creative lives.
                Balancing between soulful spirituality and cheerful pragmatism,
                Gilbert encourages us to uncover the "strange jewels" that are
                hidden within each of us. Whether we are looking to write a
                book, make art, find new ways to address challenges in our work,
                embark on a dream long deferred, or simply infuse our everyday
                lives with more mindfulness and passion, Big Magic cracks open a
                world of wonder and joy.
              </p>
              <p>
                Readers of all ages and walks of life have drawn inspiration and
                empowerment from Elizabeth Gilbert's books for years. Now this
                beloved author digs deep into her own generative process to
                share her wisdom and unique perspective about creativity. With
                profound empathy and radiant generosity, she offers potent
                insights into the mysterious nature of inspiration. She asks us
                to embrace our curiosity and let go of needless suffering. She
                shows us how to tackle what we most love, and how to face down
                what we most fear. She discusses the attitudes, approaches, and
                habits we need in order to live our most creative lives.
                Balancing between soulful spirituality and cheerful pragmatism,
                Gilbert encourages us to uncover the "strange jewels" that are
                hidden within each of us. Whether we are looking to write a
                book, make art, find new ways to address challenges in our work,
                embark on a dream long deferred, or simply infuse our everyday
                lives with more mindfulness and passion, Big Magic cracks open a
                world of wonder and joy.
              </p>
              <p>
                Readers of all ages and walks of life have drawn inspiration and
                empowerment from Elizabeth Gilbert's books for years. Now this
                beloved author digs deep into her own generative process to
                share her wisdom and unique perspective about creativity. With
                profound empathy and radiant generosity, she offers potent
                insights into the mysterious nature of inspiration. She asks us
                to embrace our curiosity and let go of needless suffering. She
                shows us how to tackle what we most love, and how to face down
                what we most fear. She discusses the attitudes, approaches, and
                habits we need in order to live our most creative lives.
                Balancing between soulful spirituality and cheerful pragmatism,
                Gilbert encourages us to uncover the "strange jewels" that are
                hidden within each of us. Whether we are looking to write a
                book, make art, find new ways to address challenges in our work,
                embark on a dream long deferred, or simply infuse our everyday
                lives with more mindfulness and passion, Big Magic cracks open a
                world of wonder and joy.
              </p>
              <p>
                Readers of all ages and walks of life have drawn inspiration and
                empowerment from Elizabeth Gilbert's books for years. Now this
                beloved author digs deep into her own generative process to
                share her wisdom and unique perspective about creativity. With
                profound empathy and radiant generosity, she offers potent
                insights into the mysterious nature of inspiration. She asks us
                to embrace our curiosity and let go of needless suffering. She
                shows us how to tackle what we most love, and how to face down
                what we most fear. She discusses the attitudes, approaches, and
                habits we need in order to live our most creative lives.
                Balancing between soulful spirituality and cheerful pragmatism,
                Gilbert encourages us to uncover the "strange jewels" that are
                hidden within each of us. Whether we are looking to write a
                book, make art, find new ways to address challenges in our work,
                embark on a dream long deferred, or simply infuse our everyday
                lives with more mindfulness and passion, Big Magic cracks open a
                world of wonder and joy.
              </p>
              <p>
                Readers of all ages and walks of life have drawn inspiration and
                empowerment from Elizabeth Gilbert's books for years. Now this
                beloved author digs deep into her own generative process to
                share her wisdom and unique perspective about creativity. With
                profound empathy and radiant generosity, she offers potent
                insights into the mysterious nature of inspiration. She asks us
                to embrace our curiosity and let go of needless suffering. She
                shows us how to tackle what we most love, and how to face down
                what we most fear. She discusses the attitudes, approaches, and
                habits we need in order to live our most creative lives.
                Balancing between soulful spirituality and cheerful pragmatism,
                Gilbert encourages us to uncover the "strange jewels" that are
                hidden within each of us. Whether we are looking to write a
                book, make art, find new ways to address challenges in our work,
                embark on a dream long deferred, or simply infuse our everyday
                lives with more mindfulness and passion, Big Magic cracks open a
                world of wonder and joy.
              </p>
              <p>
                Readers of all ages and walks of life have drawn inspiration and
                empowerment from Elizabeth Gilbert's books for years. Now this
                beloved author digs deep into her own generative process to
                share her wisdom and unique perspective about creativity. With
                profound empathy and radiant generosity, she offers potent
                insights into the mysterious nature of inspiration. She asks us
                to embrace our curiosity and let go of needless suffering. She
                shows us how to tackle what we most love, and how to face down
                what we most fear. She discusses the attitudes, approaches, and
                habits we need in order to live our most creative lives.
                Balancing between soulful spirituality and cheerful pragmatism,
                Gilbert encourages us to uncover the "strange jewels" that are
                hidden within each of us. Whether we are looking to write a
                book, make art, find new ways to address challenges in our work,
                embark on a dream long deferred, or simply infuse our everyday
                lives with more mindfulness and passion, Big Magic cracks open a
                world of wonder and joy.
              </p>
              <p>
                Readers of all ages and walks of life have drawn inspiration and
                empowerment from Elizabeth Gilbert's books for years. Now this
                beloved author digs deep into her own generative process to
                share her wisdom and unique perspective about creativity. With
                profound empathy and radiant generosity, she offers potent
                insights into the mysterious nature of inspiration. She asks us
                to embrace our curiosity and let go of needless suffering. She
                shows us how to tackle what we most love, and how to face down
                what we most fear. She discusses the attitudes, approaches, and
                habits we need in order to live our most creative lives.
                Balancing between soulful spirituality and cheerful pragmatism,
                Gilbert encourages us to uncover the "strange jewels" that are
                hidden within each of us. Whether we are looking to write a
                book, make art, find new ways to address challenges in our work,
                embark on a dream long deferred, or simply infuse our everyday
                lives with more mindfulness and passion, Big Magic cracks open a
                world of wonder and joy.
              </p>
              <p>
                Readers of all ages and walks of life have drawn inspiration and
                empowerment from Elizabeth Gilbert's books for years. Now this
                beloved author digs deep into her own generative process to
                share her wisdom and unique perspective about creativity. With
                profound empathy and radiant generosity, she offers potent
                insights into the mysterious nature of inspiration. She asks us
                to embrace our curiosity and let go of needless suffering. She
                shows us how to tackle what we most love, and how to face down
                what we most fear. She discusses the attitudes, approaches, and
                habits we need in order to live our most creative lives.
                Balancing between soulful spirituality and cheerful pragmatism,
                Gilbert encourages us to uncover the "strange jewels" that are
                hidden within each of us. Whether we are looking to write a
                book, make art, find new ways to address challenges in our work,
                embark on a dream long deferred, or simply infuse our everyday
                lives with more mindfulness and passion, Big Magic cracks open a
                world of wonder and joy.
              </p>
              <p>
                Readers of all ages and walks of life have drawn inspiration and
                empowerment from Elizabeth Gilbert's books for years. Now this
                beloved author digs deep into her own generative process to
                share her wisdom and unique perspective about creativity. With
                profound empathy and radiant generosity, she offers potent
                insights into the mysterious nature of inspiration. She asks us
                to embrace our curiosity and let go of needless suffering. She
                shows us how to tackle what we most love, and how to face down
                what we most fear. She discusses the attitudes, approaches, and
                habits we need in order to live our most creative lives.
                Balancing between soulful spirituality and cheerful pragmatism,
                Gilbert encourages us to uncover the "strange jewels" that are
                hidden within each of us. Whether we are looking to write a
                book, make art, find new ways to address challenges in our work,
                embark on a dream long deferred, or simply infuse our everyday
                lives with more mindfulness and passion, Big Magic cracks open a
                world of wonder and joy.
              </p>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
};

export default BookDetails;
