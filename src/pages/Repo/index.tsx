import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />

        <Link className="username" to="/huriellopes">
          huriellopes
        </Link>

        <span>/</span>

        <Link className="reponame" to="/huriellopes/Desafio-ValidHub">
          Desafio-ValidHub
        </Link>
      </Breadcrumb>

      <p>Contains all of my Desafio Valid Hub lessons code.</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href="https://github.com/huriellopes/Desafio-ValidHub">
        <GithubIcon />
        <span>View on Gitub</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
