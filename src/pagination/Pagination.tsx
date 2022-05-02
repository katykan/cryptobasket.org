import React from 'react';

import Link from 'next/link';

import { convertUrlToLinkHref } from '../utils/Pagination';

export type IPaginationProps = {
	previous?: string;
	next?: string;
};

const Pagination = (props: IPaginationProps) => (
	<div className="text-xl flex justify-between py-5 uppercase">
		{props.previous && (
			<div>
				<Link href={convertUrlToLinkHref(props.previous)} as={props.previous}>
					<a>← Newer Posts</a>
				</Link>
			</div>
		)}

		{props.next && (
			<div className="text-right ml-auto">
				<Link href={convertUrlToLinkHref(props.next)} as={props.next}>
					<a>Older Posts →</a>
				</Link>
			</div>
		)}
	</div>
);

export { Pagination };
